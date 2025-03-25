
import React, { useState } from 'react';
import { Mic, Volume2, AlertCircle, X, Loader2 } from 'lucide-react';

const Convert = () => {
  const [inputText, setInputText] = useState('');
  const [isRecording, setIsRecording] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [hasResult, setHasResult] = useState(false);
  const [error, setError] = useState('');

  const handleTextInput = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInputText(e.target.value);
    setError('');
  };

  const handleToggleRecording = () => {
    setIsRecording(!isRecording);
    if (!isRecording) {
      // Simulate recording for demo purposes
      setError('');
      setTimeout(() => {
        setIsRecording(false);
        setInputText("Hello, how are you today?");
      }, 3000);
    }
  };

  const handleClearInput = () => {
    setInputText('');
    setError('');
    setHasResult(false);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!inputText.trim()) {
      setError('Please enter some text or use voice input');
      return;
    }

    setIsLoading(true);
    setError('');
    
    // Simulate API call for demo purposes
    setTimeout(() => {
      setIsLoading(false);
      setHasResult(true);
    }, 2000);
  };

  return (
    <div className="min-h-screen pt-20 page-transition">
      <div className="container mx-auto px-4 py-12 max-w-5xl">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Convert to Sign Language</h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Type text or use voice input to generate sign language translations instantly.
          </p>
        </div>

        <div className="glass-card p-6 md:p-8 rounded-2xl mb-8">
          <form onSubmit={handleSubmit}>
            <div className="relative mb-4">
              <textarea
                className="w-full h-32 p-4 bg-white/40 border border-handsy-quaternary/30 rounded-xl focus:outline-none focus:ring-2 focus:ring-handsy-primary/50 transition-all resize-none"
                placeholder="Type your text here..."
                value={inputText}
                onChange={handleTextInput}
              ></textarea>
              
              {inputText && (
                <button
                  type="button"
                  className="absolute top-3 right-3 text-gray-400 hover:text-gray-600 transition-colors"
                  onClick={handleClearInput}
                >
                  <X size={20} />
                </button>
              )}
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-4">
              <button
                type="button"
                onClick={handleToggleRecording}
                className={`flex-1 flex items-center justify-center gap-2 p-4 rounded-xl transition-all ${
                  isRecording
                    ? 'bg-red-500 text-white'
                    : 'bg-handsy-quaternary/30 hover:bg-handsy-quaternary/50 text-gray-700'
                }`}
              >
                {isRecording ? (
                  <>
                    <span className="animate-pulse">Recording...</span>
                    <Volume2 className="animate-pulse" size={20} />
                  </>
                ) : (
                  <>
                    <span>Voice Input</span>
                    <Mic size={20} />
                  </>
                )}
              </button>

              <button
                type="submit"
                disabled={isLoading || !inputText.trim()}
                className={`flex-1 p-4 rounded-xl font-medium transition-all ${
                  isLoading || !inputText.trim()
                    ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                    : 'bg-handsy-primary text-white hover:bg-handsy-secondary hover:shadow-lg'
                }`}
              >
                {isLoading ? (
                  <div className="flex items-center justify-center gap-2">
                    <Loader2 className="animate-spin" size={20} />
                    <span>Translating...</span>
                  </div>
                ) : (
                  'Convert to Sign Language'
                )}
              </button>
            </div>

            {error && (
              <div className="mt-4 p-3 bg-red-50 text-red-600 rounded-lg flex items-center gap-2">
                <AlertCircle size={18} />
                <span>{error}</span>
              </div>
            )}
          </form>
        </div>

        {hasResult && (
          <div className="glass-card p-6 md:p-8 rounded-2xl animate-page-fade-in">
            <h2 className="text-xl font-semibold mb-4">Sign Language Translation</h2>
            
            <div className="relative overflow-hidden bg-black rounded-xl aspect-video flex items-center justify-center">
              <div className="text-center text-white">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-handsy-primary/30 flex items-center justify-center">
                  <svg 
                    className="w-8 h-8 text-handsy-primary" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24" 
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <p className="font-medium">
                  Video Translation
                </p>
                <p className="text-sm text-gray-400 mt-2">
                  Showing sign language for: "{inputText}"
                </p>
              </div>
            </div>

            <div className="mt-6 flex justify-between">
              <div className="text-sm text-gray-600">
                <span className="font-medium">Input Text:</span> {inputText}
              </div>
              <button 
                className="text-handsy-primary hover:text-handsy-secondary transition-colors text-sm font-medium"
              >
                Download Translation
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Convert;
