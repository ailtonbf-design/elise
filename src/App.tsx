import { motion } from 'motion/react';
import { ArrowRight, Brain, Activity, Utensils, Timer, ChevronDown } from 'lucide-react';

export default function App() {
  return (
    <div className="min-h-screen bg-zinc-950 selection:bg-[#FF5A36]/30 selection:text-white">
      {/* 1. Hero Section */}
      <section className="relative h-[100dvh] w-full flex flex-col md:flex-row items-start md:items-center justify-start overflow-hidden pt-12 md:pt-0 bg-zinc-950">
        
        {/* Mobile Background Image */}
        <div className="absolute inset-0 md:hidden z-0">
          <img 
            src="https://res.cloudinary.com/dapsovbs5/image/upload/v1773336416/Banner_mobile_Elise_ibmn9i.webp" 
            alt="Mulher treinando" 
            className="w-full h-full object-cover object-bottom opacity-100"
            referrerPolicy="no-referrer"
          />
          {/* Gradient overlay: Dark at top for text, transparent at bottom for the model */}
          <div className="absolute inset-0 bg-gradient-to-b from-zinc-950 from-0% via-zinc-950/80 via-45% to-transparent to-70%"></div>
          {/* Bottom gradient to blend smoothly with the next section */}
          <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-zinc-950 to-transparent"></div>
        </div>

        {/* Desktop Background Image (Full Cover) */}
        <div className="hidden md:block absolute inset-0 z-0">
          <img 
            src="https://res.cloudinary.com/dapsovbs5/image/upload/v1773335862/Banner_Elise_taeurd.webp" 
            alt="Mulher treinando" 
            className="w-full h-full object-cover object-right lg:object-center opacity-100"
            referrerPolicy="no-referrer"
          />
          {/* Desktop Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-zinc-950 from-30% via-zinc-950/80 to-transparent"></div>
          {/* Bottom gradient to blend smoothly with the next section */}
          <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-zinc-950 to-transparent"></div>
        </div>

        {/* Content Container */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full flex flex-col items-start mt-4 md:mt-12">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-[2.2rem] leading-[1.1] md:text-7xl lg:text-8xl font-black tracking-tighter md:leading-[0.95] mb-3 md:mb-6 text-left"
          >
            <span className="bg-gradient-to-r from-[#FF5A36] to-orange-400 bg-clip-text text-transparent">Magra e Definida</span><br/>
            <span className="text-white">para Sempre</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="text-sm md:text-2xl text-zinc-300 max-w-2xl font-light tracking-wide mb-6 md:mb-10 text-left"
          >
            O Fim do Efeito Sanfona para Mulheres com Agendas Caóticas. O Protocolo F3 alinha sua mente, ajusta seus hormônios e transforma seu corpo com apenas 17 minutos por dia.
          </motion.p>

          <motion.button
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="relative group overflow-hidden rounded-full bg-[#FF5A36] px-6 py-3 md:px-12 md:py-5 text-sm md:text-xl font-bold text-white shadow-[0_0_40px_-10px_#FF5A36]"
          >
            <span className="relative z-10 flex items-center gap-2">
              Quero Destravar Meus Resultados <ArrowRight className="w-4 h-4 md:w-6 md:h-6 group-hover:translate-x-1 transition-transform" />
            </span>
            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out"></div>
          </motion.button>
        </div>
        
        <motion.div 
          animate={{ y: [0, 10, 0] }} 
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-zinc-500"
        >
          <ChevronDown className="w-8 h-8" />
        </motion.div>
      </section>

      {/* 2. Pain Section */}
      <section className="py-32 relative w-full max-w-7xl mx-auto px-6">
        <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-[#FF5A36]/10 rounded-full blur-[120px] pointer-events-none"></div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="lg:col-span-7 lg:col-start-1"
          >
            <h2 className="text-4xl md:text-6xl font-black tracking-tighter leading-tight text-zinc-100">
              Você já sabotou seus resultados com a frase <br/>
              <span className="text-zinc-500 italic font-serif font-light">"hoje eu mereço"?</span>
            </h2>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="lg:col-span-5 lg:col-start-7 lg:mt-32"
          >
            <div className="p-8 rounded-3xl bg-zinc-900/50 backdrop-blur-xl border border-white/5 relative">
              <div className="absolute -top-6 -left-4 text-7xl text-[#FF5A36] opacity-40 font-serif leading-none">"</div>
              <p className="text-xl text-zinc-300 leading-relaxed font-light relative z-10">
                O problema não é falta de força de vontade. É tentar emagrecer com a mente cansada e o corpo desregulado. 
                <span className="block mt-6 text-white font-medium text-2xl">Onde o 'eu mereço' morre, seu verdadeiro resultado nasce.</span>
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 3. Solution Section (Bento Grid) */}
      <section className="py-32 relative w-full max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-black tracking-tighter text-white mb-6"
          >
            O Protocolo F3
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl text-zinc-400 max-w-2xl mx-auto font-light"
          >
            A tríade perfeita para transformar seu corpo de forma definitiva, sem dietas malucas ou horas no cardio.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-2 gap-6 auto-rows-[280px]">
          
          {/* Card 1 (Wide) */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="md:col-span-2 rounded-3xl bg-zinc-900/40 backdrop-blur-md border border-white/10 p-8 flex flex-col justify-between group overflow-hidden relative"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[#FF5A36]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <Activity className="w-10 h-10 text-[#FF5A36] mb-4" />
            <div className="relative z-10">
              <h3 className="text-2xl font-bold text-white mb-2">Regulação Hormonal</h3>
              <p className="text-zinc-400 text-lg">Otimização metabólica para parar de estocar gordura e transformar seu corpo em uma máquina de queima natural.</p>
            </div>
          </motion.div>

          {/* Card 3 (Tall/Vertical) */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="md:row-span-2 rounded-3xl bg-zinc-900/40 backdrop-blur-md border border-white/10 p-8 flex flex-col justify-between group overflow-hidden relative"
          >
            <div className="absolute inset-0 bg-gradient-to-b from-zinc-800/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <Brain className="w-10 h-10 text-zinc-300 mb-4" />
            <div className="mt-auto relative z-10">
              <h3 className="text-2xl font-bold text-white mb-2">Preparação da Mente</h3>
              <p className="text-zinc-400">Construa uma rotina inabalável contra a autossabotagem. O emagrecimento começa nas suas decisões diárias.</p>
            </div>
          </motion.div>

          {/* Card 2 (Square) */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="rounded-3xl bg-zinc-900/40 backdrop-blur-md border border-white/10 p-8 flex flex-col justify-between group relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-zinc-800/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <Utensils className="w-10 h-10 text-zinc-300 mb-4" />
            <div className="relative z-10">
              <h3 className="text-xl font-bold text-white mb-2">Ajustes na Alimentação</h3>
              <p className="text-zinc-400 text-sm">Estratégias inteligentes sem dietas malucas ou restrições severas.</p>
            </div>
          </motion.div>

          {/* Card 4 (Orange Highlight) */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="rounded-3xl bg-[#FF5A36] p-8 flex flex-col justify-between group relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <Timer className="w-10 h-10 text-white mb-4 relative z-10" />
            <div className="relative z-10">
              <h3 className="text-xl font-bold text-white mb-2">Treinos F3</h3>
              <p className="text-orange-100 text-sm font-medium">Apenas 17 minutos de alta eficiência diária. O mínimo esforço para o máximo resultado.</p>
            </div>
          </motion.div>

        </div>
      </section>

      {/* 4. Authority Section */}
      <section className="py-32 relative w-full overflow-hidden">
        <div className="absolute inset-0 bg-zinc-900/20"></div>
        
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#FF5A36]/5 rounded-full blur-[150px] translate-x-1/3 -translate-y-1/4 pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="flex flex-col md:flex-row items-center gap-16">
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="w-full md:w-1/2 relative"
            >
              <div className="aspect-[4/5] rounded-3xl overflow-hidden relative border border-white/5">
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent z-10"></div>
                <img 
                  src="https://res.cloudinary.com/dapsovbs5/image/upload/v1773337741/Design_sem_nome_1_pnolln.webp" 
                  alt="Elise Personal Trainer" 
                  className="w-full h-full object-cover object-center opacity-100"
                  referrerPolicy="no-referrer"
                />
              </div>
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="absolute bottom-10 -right-4 md:-right-12 bg-zinc-900/90 backdrop-blur-xl border border-white/10 p-6 rounded-2xl z-20 shadow-2xl"
              >
                <p className="text-4xl font-black text-white mb-1">+5k</p>
                <p className="text-sm text-zinc-400 font-medium uppercase tracking-wider">Alunas<br/>Transformadas</p>
              </motion.div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="w-full md:w-1/2"
            >
              <h2 className="text-5xl md:text-7xl font-black tracking-tighter text-white mb-4">Elise</h2>
              <p className="text-2xl text-[#FF5A36] font-medium mb-8">Especialista em Rotinas Inabaláveis.</p>
              <p className="text-xl text-zinc-300 font-light leading-relaxed mb-6">
                "Minha missão é transformar agendas caóticas em resultados reais e duradouros. Eu não vou te passar um treino de 2 horas."
              </p>
              <p className="text-xl text-white font-medium leading-relaxed">
                "Eu vou te dar a chave para dominar seu corpo em 17 minutos."
              </p>
            </motion.div>

          </div>
        </div>
      </section>

      {/* 5. Footer & Final CTA */}
      <section className="py-32 relative w-full border-t border-white/5 bg-zinc-950 overflow-hidden">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-64 bg-[#FF5A36]/10 blur-[100px] pointer-events-none"></div>
        
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-black tracking-tighter text-white mb-8"
          >
            Chega de recomeçar toda segunda-feira.
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl text-zinc-400 font-light mb-12"
          >
            Dê o primeiro passo para a sua versão mais forte, magra e definida.
          </motion.p>
          
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="relative group overflow-hidden rounded-full bg-[#FF5A36] px-10 py-5 text-xl font-bold text-white shadow-[0_0_40px_-10px_#FF5A36] mx-auto flex items-center gap-3"
          >
            <span className="relative z-10 flex items-center gap-2">
              Quero Destravar Meus Resultados <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
            </span>
            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out"></div>
          </motion.button>
        </div>
      </section>

      <footer className="py-10 border-t border-white/5 text-center text-zinc-600 text-sm bg-zinc-950">
        <p>&copy; {new Date().getFullYear()} Protocolo F3 por Elise. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
}
