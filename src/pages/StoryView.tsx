
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HealingCloud from '@/components/HealingCloud';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { ArrowLeft, ArrowRight } from 'lucide-react';

const StoryView = () => {
  const { id } = useParams();
  const [story, setStory] = useState<any>(null);
  const [page, setPage] = useState(0);
  const [fadeIn, setFadeIn] = useState(true);
  
  useEffect(() => {
    // Get the story from localStorage
    const savedStory = localStorage.getItem('currentStory');
    if (savedStory) {
      setStory(JSON.parse(savedStory));
    }
  }, [id]);

  const handlePageChange = (direction: 'next' | 'prev') => {
    setFadeIn(false);
    setTimeout(() => {
      if (direction === 'next' && page < story.content.length - 1) {
        setPage(page + 1);
      } else if (direction === 'prev' && page > 0) {
        setPage(page - 1);
      }
      setFadeIn(true);
    }, 300);
  };

  if (!story) return null;

  return (
    <div className="min-h-screen flex flex-col story-gradient">
      <Header />
      
      <main className="flex-grow px-4 md:px-8 py-8 md:py-12">
        <div className="max-w-7xl mx-auto page-transition">
          <div className="max-w-3xl mx-auto relative">
            <HealingCloud className="top-[-50px] left-[-30px] opacity-30" />
            <HealingCloud className="bottom-[-30px] right-[-40px] opacity-30" />
            
            <Card className="bg-white/90 backdrop-blur-sm shadow-xl border-healer-light p-6 md:p-8">
              <div className="text-center mb-6">
                <h1 className="text-2xl md:text-3xl font-serif font-bold text-healer-tertiary">
                  {story.title}
                </h1>
                <div className="flex justify-center gap-3 mt-2">
                  <span className="text-xs px-3 py-1 bg-healer-light rounded-full text-healer-tertiary">
                    {story.mood}
                  </span>
                  <span className="text-xs px-3 py-1 bg-healer-light rounded-full text-healer-tertiary">
                    {story.genre}
                  </span>
                </div>
              </div>
              
              <Separator className="my-4 bg-healer-light" />
              
              <div 
                className={`min-h-[300px] transition-opacity duration-300 ${fadeIn ? 'opacity-100' : 'opacity-0'}`}
              >
                <p className="text-lg leading-relaxed font-serif text-gray-800">
                  {story.content[page]}
                </p>
              </div>
              
              <div className="mt-8 flex justify-between items-center">
                <Button 
                  onClick={() => handlePageChange('prev')} 
                  disabled={page === 0}
                  className={`flex items-center gap-2 ${page === 0 ? 'opacity-50 cursor-not-allowed' : ''}`}
                  variant="outline"
                >
                  <ArrowLeft size={16} />
                  Previous
                </Button>
                
                <span className="text-sm text-healer-tertiary">
                  Page {page + 1} of {story.content.length}
                </span>
                
                <Button 
                  onClick={() => handlePageChange('next')} 
                  disabled={page === story.content.length - 1}
                  className={`flex items-center gap-2 ${page === story.content.length - 1 ? 'opacity-50 cursor-not-allowed' : ''}`}
                  variant={page === story.content.length - 1 ? "outline" : "default"}
                >
                  {page === story.content.length - 1 ? 'Finished' : 'Continue'}
                  {page !== story.content.length - 1 && <ArrowRight size={16} />}
                </Button>
              </div>
            </Card>
            
            {page === story.content.length - 1 && (
              <div className="mt-8 bg-white/60 backdrop-blur-sm rounded-xl p-6 shadow-md text-center">
                <h3 className="font-serif font-semibold mb-3">How did this story make you feel?</h3>
                <div className="flex justify-center gap-2">
                  {['Calmer', 'Inspired', 'Reflective', 'Better'].map((feeling) => (
                    <Button 
                      key={feeling}
                      variant="outline" 
                      className="border-healer-primary text-healer-primary hover:bg-healer-light"
                    >
                      {feeling}
                    </Button>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default StoryView;
