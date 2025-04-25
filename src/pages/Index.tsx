
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HealingCloud from '@/components/HealingCloud';
import { Button } from '@/components/ui/button';

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col story-gradient">
      <Header />
      
      <main className="flex-grow px-4 md:px-8 py-12 md:py-16">
        <div className="max-w-7xl mx-auto page-transition">
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16">
            <div className="w-full md:w-1/2 space-y-6 relative">
              <HealingCloud className="top-[-40px] right-[20px] opacity-50" />
              
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-serif font-bold leading-tight">
                Healing Through <span className="text-gradient">AI-Crafted Stories</span>
              </h1>
              
              <p className="text-lg md:text-xl text-healer-tertiary/80 max-w-lg">
                Experience personalized narratives that adapt to your mood, help process emotions,
                and create a space for mindfulness and healing.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <Button 
                  onClick={() => navigate('/create')}
                  className="healing-button"
                >
                  Create Your Story
                </Button>
                
                <Button 
                  onClick={() => navigate('/about')}
                  variant="outline"
                  className="border-healer-primary text-healer-primary hover:bg-healer-light"
                >
                  Learn More
                </Button>
              </div>
              
              <div className="mt-8 flex items-center gap-4">
                <div className="flex -space-x-2">
                  {[1, 2, 3].map(index => (
                    <div 
                      key={index}
                      className="w-8 h-8 rounded-full bg-healer-accent2 border-2 border-white flex items-center justify-center text-xs font-medium"
                    >
                      {index}
                    </div>
                  ))}
                </div>
                <p className="text-sm text-healer-tertiary/80">
                  Join thousands finding comfort in stories
                </p>
              </div>
            </div>
            
            <div className="w-full md:w-1/2 relative">
              <div className="relative rounded-xl overflow-hidden bg-white shadow-xl p-1 md:p-2 border border-healer-light">
                <div className="aspect-[3/2] rounded-lg overflow-hidden bg-gradient-to-tr from-healer-light to-healer-accent1 flex items-center justify-center p-4">
                  <div className="w-full max-w-md bg-white/90 backdrop-blur-sm rounded-lg p-6 shadow-lg">
                    <h3 className="font-serif font-semibold text-lg mb-3 text-healer-tertiary">The Whispering Woods</h3>
                    <p className="text-sm text-healer-tertiary/80 leading-relaxed">
                      The ancient trees swayed gently, their leaves rustling with secret messages. 
                      Maya took a deep breath, feeling the forest's calm wash over her anxiety. 
                      Each step forward was a step toward healing, toward finding the forgotten sanctuary...
                    </p>
                    <div className="mt-4 text-xs text-right text-healer-tertiary/60">
                      A story crafted for emotional healing
                    </div>
                  </div>
                </div>
              </div>
              
              <HealingCloud className="bottom-[-20px] left-[30px] opacity-50" />
            </div>
          </div>
          
          <div className="mt-20 md:mt-32 text-center space-y-6 max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-serif font-bold">
              How <span className="text-gradient">StoryHealer</span> Works
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-6">
              <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-md">
                <div className="w-12 h-12 rounded-full bg-healer-light flex items-center justify-center mb-4 mx-auto">
                  <span className="text-healer-primary font-bold">1</span>
                </div>
                <h3 className="font-serif font-semibold mb-2 text-center">Share Your Mood</h3>
                <p className="text-sm text-healer-tertiary/80 text-center">
                  Tell us how you're feeling and what kind of story would bring you comfort today.
                </p>
              </div>
              
              <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-md">
                <div className="w-12 h-12 rounded-full bg-healer-light flex items-center justify-center mb-4 mx-auto">
                  <span className="text-healer-primary font-bold">2</span>
                </div>
                <h3 className="font-serif font-semibold mb-2 text-center">AI Creates Your Story</h3>
                <p className="text-sm text-healer-tertiary/80 text-center">
                  Our AI crafts a unique narrative tailored to your emotional needs and preferences.
                </p>
              </div>
              
              <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-md">
                <div className="w-12 h-12 rounded-full bg-healer-light flex items-center justify-center mb-4 mx-auto">
                  <span className="text-healer-primary font-bold">3</span>
                </div>
                <h3 className="font-serif font-semibold mb-2 text-center">Experience Healing</h3>
                <p className="text-sm text-healer-tertiary/80 text-center">
                  Immerse yourself in a story that helps process emotions and find comfort through narrative.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
