import React from 'react';

const AboutIntro: React.FC = () => {
  return (
    <section className="pt-6 md:pt-10 bg-neutral2 text-text1">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Main Card */}
        <div className="bg-white rounded-xl shadow-sm border border-neutral-200 overflow-hidden">
          
          {/* Header */}
          <div className="bg-primary1/5 border-b border-neutral-100 py-6">
            <h2 className="text-3xl md:text-4xl font-bebas text-center text-primary1 tracking-wide">
              About Me
            </h2>
          </div>

          {/* Content */}
          <div className="p-6 md:p-10">
            <div className="max-w-4xl mx-auto">
              
              <h3 className="text-xl md:text-2xl mb-6 font-medium text-primary1">
                <strong>Hello World!</strong> 👋🏻
              </h3>

              <div className="text-base md:text-lg leading-relaxed text-text1 space-y-6">
                <p>
                  If you've made it here, chances are you're curious to know a little more about me. 
                  I'd like to think that's a good thing… so, welcome!
                </p>

                {/* Quote Block */}
                <div className="bg-neutral2/50 border-l-4 border-primary2 p-6 rounded-r-lg my-8">
                  <p className="text-xl italic font-serif text-text2 mb-2">
                    "You have to know the past to understand the present."
                  </p>
                  <p className="text-right font-bold text-primary1 text-sm uppercase tracking-wider">
                    ~ Carl Sagan
                  </p>
                </div>

                <p>
                  Like everyone, my life has been shaped by a collection of stories—moments that defined my values, 
                  challenged my beliefs, and influenced how I see the world. Some were small but meaningful, 
                  while others completely reshaped my path.
                </p>
                <p>
                  In this section, you'll find a series of personal stories—little snapshots of experiences 
                  that have brought me to where I am today. Through them, I hope you get a better sense of who I am, 
                  what drives me, and where I'm headed.
                </p>
                <p>
                  So, take a scroll, read at your own pace, and maybe even find something that resonates with you. 
                  After all, every story has something to teach us.
                </p>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutIntro;