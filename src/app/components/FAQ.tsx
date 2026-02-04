import React from 'react';
import { FAQS, WINE_POLICY } from '../constants';
import { Reveal } from './ui/Reveal';
import { Wine } from 'lucide-react';

export const FAQ = () => {
  return (
    <section id="duvidas" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="mb-16">
          <Reveal width="100%">
            <h2 className="font-serif text-3xl md:text-5xl text-riso-dark mb-4">
              Dúvidas Frequentes
            </h2>
            <div className="w-16 h-[1px] bg-riso-salmon mx-auto"></div>
          </Reveal>
        </div>

        {/* Questions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12 mb-20">
          {FAQS.map((faq, index) => (
            <Reveal key={index} delay={index * 50}>
              <div className="flex flex-col h-full">
                <h3 className="font-serif text-xl text-riso-brown mb-4 font-medium leading-tight">
                  {faq.question}
                </h3>
                <p className="text-riso-dark/70 font-light text-sm leading-relaxed flex-1">
                  {faq.answer}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Wine Policy Feature Card */}
        <Reveal width="100%" delay={200}>
          <div className="relative overflow-hidden rounded-xl bg-riso-brown text-riso-cream p-8 md:p-16 text-center shadow-xl">
            {/* Background Texture Effect */}
            <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
            
            <div className="relative z-10 max-w-2xl mx-auto">
              <div className="flex justify-center mb-6">
                 <div className="p-4 rounded-full bg-white/5 border border-white/10">
                   <Wine className="w-8 h-8 text-riso-salmon" />
                 </div>
              </div>
              
              <h3 className="font-serif text-3xl md:text-4xl mb-2">{WINE_POLICY.title}</h3>
              <p className="text-white/80 font-light italic mb-8 text-lg">{WINE_POLICY.subtitle}</p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center border-t border-white/10 pt-8">
                
                {/* Standard Days */}
                <div className="text-center md:text-right md:pr-8 md:border-r border-white/10">
                   <p className="uppercase text-xs tracking-widest text-white/50 mb-2">Quinta, Sexta e Sábado</p>
                   <p className="text-2xl font-serif">{WINE_POLICY.standard_fee}</p>
                   <p className="text-xs text-white/60 mt-1">por garrafa</p>
                </div>

                {/* Promo Days */}
                <div className="text-center md:text-left md:pl-4">
                   <p className="uppercase text-xs tracking-widest text-riso-salmon mb-2 font-bold">{WINE_POLICY.promo_days}</p>
                   <p className="text-3xl font-serif text-riso-salmon">{WINE_POLICY.promo_title}</p>
                   <p className="text-xs text-white/80 mt-1 max-w-xs mx-auto md:mx-0">
                     Traga seu vinho e não pague taxa de rolha.
                   </p>
                </div>

              </div>
            </div>
          </div>
        </Reveal>

      </div>
    </section>
  );
};