
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import StoryForm from '@/components/StoryForm';
import HealingCloud from '@/components/HealingCloud';

const CreateStory = () => {
  return (
    <div className="min-h-screen flex flex-col story-gradient">
      <Header />
      
      <main className="flex-grow px-4 md:px-8 py-8 md:py-12">
        <div className="max-w-7xl mx-auto page-transition">
          <div className="text-center mb-8 relative">
            <HealingCloud className="top-[-30px] left-[10%] opacity-50" />
            <h1 className="text-3xl md:text-4xl font-serif font-bold mb-3">
              Create Your <span className="text-gradient">Healing Story</span>
            </h1>
            <p className="text-lg text-healer-tertiary/80 max-w-xl mx-auto">
              Tell us a bit about how you're feeling and what kind of story would bring you comfort today.
            </p>
            <HealingCloud className="top-[-20px] right-[10%] opacity-50" />
          </div>
          
          <StoryForm />
          
          <div className="mt-12 bg-white/60 backdrop-blur-sm rounded-xl p-6 shadow-md max-w-3xl mx-auto">
            <h3 className="font-serif font-semibold mb-3 text-lg text-center">
              The Science of Narrative Therapy
            </h3>
            <p className="text-sm text-healer-tertiary/80 text-center leading-relaxed">
              Stories have been used for healing throughout human history. Research shows that engaging with 
              personalized narratives can help reduce stress, process emotions, and create meaning from 
              difficult experiences. StoryHealer uses AI to create stories that respond to your unique 
              emotional needs at any given moment.
            </p>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default CreateStory;
