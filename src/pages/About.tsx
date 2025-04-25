
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HealingCloud from '@/components/HealingCloud';
import { Card, CardContent } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Button } from '@/components/ui/button';

const About = () => {
  const navigate = useNavigate();
  
  return (
    <div className="min-h-screen flex flex-col story-gradient">
      <Header />
      
      <main className="flex-grow px-4 md:px-8 py-8 md:py-12">
        <div className="max-w-7xl mx-auto page-transition">
          <div className="text-center mb-8 relative">
            <HealingCloud className="top-[-40px] left-[10%] opacity-50" />
            <h1 className="text-3xl md:text-4xl font-serif font-bold mb-3">
              About <span className="text-gradient">StoryHealer</span>
            </h1>
            <p className="text-lg text-healer-tertiary/80 max-w-xl mx-auto">
              Using the power of AI and narrative therapy to create personalized healing experiences.
            </p>
            <HealingCloud className="top-[-30px] right-[10%] opacity-50" />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
            <Card className="bg-white/90 backdrop-blur-sm shadow-md">
              <CardContent className="p-6 md:p-8">
                <h2 className="text-xl md:text-2xl font-serif font-semibold mb-4 text-healer-tertiary">
                  Our Mission
                </h2>
                <p className="text-healer-tertiary/80 leading-relaxed">
                  StoryHealer was born from a simple but powerful idea: stories heal. Throughout human history, 
                  narratives have helped us process emotions, find meaning in difficulty, and imagine new 
                  possibilities for ourselves.
                </p>
                <p className="text-healer-tertiary/80 leading-relaxed mt-4">
                  Our mission is to combine the ancient art of storytelling with modern AI technology to create 
                  personalized narratives that respond to your unique emotional needs. Whether you're seeking 
                  calm during anxiety, comfort during grief, or inspiration during uncertainty, StoryHealer 
                  crafts stories that meet you where you are.
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-white/90 backdrop-blur-sm shadow-md">
              <CardContent className="p-6 md:p-8">
                <h2 className="text-xl md:text-2xl font-serif font-semibold mb-4 text-healer-tertiary">
                  How It Works
                </h2>
                <ol className="space-y-4">
                  <li className="flex gap-3">
                    <div className="w-6 h-6 rounded-full bg-healer-light flex-shrink-0 flex items-center justify-center text-sm font-medium text-healer-primary">
                      1
                    </div>
                    <div>
                      <h3 className="font-medium">Emotional Assessment</h3>
                      <p className="text-sm text-healer-tertiary/80">
                        Share your current mood and emotional state through our intuitive interface.
                      </p>
                    </div>
                  </li>
                  
                  <li className="flex gap-3">
                    <div className="w-6 h-6 rounded-full bg-healer-light flex-shrink-0 flex items-center justify-center text-sm font-medium text-healer-primary">
                      2
                    </div>
                    <div>
                      <h3 className="font-medium">Story Preferences</h3>
                      <p className="text-sm text-healer-tertiary/80">
                        Tell us what kind of narratives resonate with you—from gentle fantasy to inspiring adventure.
                      </p>
                    </div>
                  </li>
                  
                  <li className="flex gap-3">
                    <div className="w-6 h-6 rounded-full bg-healer-light flex-shrink-0 flex items-center justify-center text-sm font-medium text-healer-primary">
                      3
                    </div>
                    <div>
                      <h3 className="font-medium">AI Generation</h3>
                      <p className="text-sm text-healer-tertiary/80">
                        Our AI crafts a unique story tailored to your emotional needs and preferences.
                      </p>
                    </div>
                  </li>
                  
                  <li className="flex gap-3">
                    <div className="w-6 h-6 rounded-full bg-healer-light flex-shrink-0 flex items-center justify-center text-sm font-medium text-healer-primary">
                      4
                    </div>
                    <div>
                      <h3 className="font-medium">Immersive Experience</h3>
                      <p className="text-sm text-healer-tertiary/80">
                        Engage with your story at your own pace, in a calming and accessible interface.
                      </p>
                    </div>
                  </li>
                </ol>
              </CardContent>
            </Card>
          </div>
          
          <Card className="mt-10 bg-white/90 backdrop-blur-sm shadow-md">
            <CardContent className="p-6 md:p-8">
              <h2 className="text-xl md:text-2xl font-serif font-semibold mb-4 text-healer-tertiary">
                The Science Behind StoryHealer
              </h2>
              
              <p className="text-healer-tertiary/80 leading-relaxed">
                StoryHealer is built on robust research in narrative therapy, cognitive psychology, and 
                the emerging field of AI-assisted mental wellbeing. Here's how stories support emotional healing:
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                <div>
                  <h3 className="font-medium mb-2">Emotional Regulation</h3>
                  <p className="text-sm text-healer-tertiary/80">
                    Engaging with stories activates the same neural networks involved in emotional processing, 
                    allowing us to experience and regulate emotions in a safe, controlled way.
                  </p>
                </div>
                
                <div>
                  <h3 className="font-medium mb-2">Narrative Identity</h3>
                  <p className="text-sm text-healer-tertiary/80">
                    Stories help us make meaning of our experiences and construct a coherent sense of self, 
                    which is essential for psychological wellbeing.
                  </p>
                </div>
                
                <div>
                  <h3 className="font-medium mb-2">Mindfulness and Presence</h3>
                  <p className="text-sm text-healer-tertiary/80">
                    Immersing in a story encourages present-moment awareness, reducing rumination and 
                    anxiety about past or future.
                  </p>
                </div>
                
                <div>
                  <h3 className="font-medium mb-2">Cognitive Reframing</h3>
                  <p className="text-sm text-healer-tertiary/80">
                    Stories can model new perspectives and approaches to challenges, helping readers develop 
                    flexible thinking patterns.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Separator className="my-10" />
          
          <div className="text-center">
            <h2 className="text-xl md:text-2xl font-serif font-semibold mb-4 text-healer-tertiary">
              Ready to experience healing through stories?
            </h2>
            <Button 
              onClick={() => navigate('/create')}
              className="healing-button mt-2"
            >
              Create Your First Story
            </Button>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default About;
