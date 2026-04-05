import { useState, useEffect } from 'react'
import './App.css'

const WHATSAPP_LINK = "https://wa.me/5511964465975?text=Olá,%20vim%20pelo%20site%20da%20Crédito%20Finanças%20e%20gostaria%20de%20solicitar%20um%20empréstimo."

// Função para rastrear cliques no WhatsApp (Meta Pixel)
const trackWhatsAppClick = () => {
  if (typeof window !== 'undefined' && (window as any).fbq) {
    (window as any).fbq('track', 'Lead', {
      content_name: 'WhatsApp Click',
      content_category: 'Lead Generation',
      value: 1,
      currency: 'BRL'
    })
  }
}

function App() {
  const [activeTab, setActiveTab] = useState('motoristas')
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="min-h-screen bg-black">
      {/* Header */}
      <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-black/95 backdrop-blur-md shadow-lg' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-lg flex items-center justify-center">
              <span className="text-black font-bold text-lg">₢</span>
            </div>
            <h1 className="text-xl font-bold text-white">Crédito Finanças</h1>
          </div>
          <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="btn btn-primary" onClick={trackWhatsAppClick}>
            Falar no WhatsApp
          </a>
        </div>
      </header>

      {/* Hero Section - Ultra Clean com muito espaço */}
      <section className="pt-40 pb-32 px-4 text-center">
        <div className="max-w-2xl mx-auto fade-in-up">
          <h1 className="text-6xl md:text-7xl font-bold text-white mb-12 leading-tight">
            Dinheiro Rápido
          </h1>
          
          <p className="text-2xl md:text-3xl text-gray-300 mb-16 leading-relaxed font-light">
            Aprovação em até 24 horas
          </p>

          <p className="text-lg text-gray-400 mb-20 leading-relaxed">
            Sem burocracia • Atendimento humanizado
          </p>
          
          <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="btn btn-primary text-lg px-10 py-4 inline-block" onClick={trackWhatsAppClick}>
            Falar no WhatsApp Agora
          </a>
        </div>
      </section>

      {/* Benefits Section - Muito espaçado */}
      <section className="py-32 px-4 bg-gray-900/30">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-5xl font-bold text-center text-white mb-24">Por Que Escolher?</h2>
          
          <div className="grid md:grid-cols-3 gap-16">
            {[
              { icon: '⚡', title: 'Aprovação Rápida', desc: 'Análise em poucas horas' },
              { icon: '📋', title: 'Sem Burocracia', desc: 'Processo simples e direto' },
              { icon: '💰', title: 'Liberação Ágil', desc: 'Dinheiro em até 24 horas' }
            ].map((benefit, idx) => (
              <div key={idx} className="text-center space-y-6">
                <div className="text-6xl">{benefit.icon}</div>
                <h3 className="text-2xl font-bold text-white">{benefit.title}</h3>
                <p className="text-gray-400 text-lg">{benefit.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-24 pt-24 border-t border-gray-800">
            <div className="grid md:grid-cols-3 gap-16">
              {[
                { icon: '👤', title: 'Atendimento Humanizado', desc: 'Especialistas dedicados' },
                { icon: '✅', title: 'Score Médio Aceito', desc: 'Analisamos seu perfil' },
                { icon: '🔒', title: '100% Seguro', desc: 'Dados protegidos' }
              ].map((benefit, idx) => (
                <div key={idx} className="text-center space-y-6">
                  <div className="text-6xl">{benefit.icon}</div>
                  <h3 className="text-2xl font-bold text-white">{benefit.title}</h3>
                  <p className="text-gray-400 text-lg">{benefit.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Segmented Section - Muito espaço */}
      <section className="py-32 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-5xl font-bold text-center text-white mb-20">Para Quem?</h2>
          
          <div className="flex justify-center gap-6 mb-20">
            <button
              onClick={() => setActiveTab('motoristas')}
              className={`px-8 py-3 rounded-lg font-semibold transition-all text-base ${
                activeTab === 'motoristas'
                  ? 'bg-gradient-to-r from-yellow-500 to-orange-500 text-black'
                  : 'bg-gray-800 text-white hover:bg-gray-700'
              }`}
            >
              🚗 Motoristas
            </button>
            <button
              onClick={() => setActiveTab('comerciantes')}
              className={`px-8 py-3 rounded-lg font-semibold transition-all text-base ${
                activeTab === 'comerciantes'
                  ? 'bg-gradient-to-r from-yellow-500 to-orange-500 text-black'
                  : 'bg-gray-800 text-white hover:bg-gray-700'
              }`}
            >
              🏪 Comerciantes
            </button>
          </div>

          {activeTab === 'motoristas' ? (
            <div className="fade-in-up space-y-8">
              <ul className="space-y-8">
                {[
                  'Dinheiro para manutenção do veículo',
                  'Capital para rodar mais e faturar mais',
                  'Sem exigências de comprovante de renda formal',
                  'Análise rápida baseada em seu histórico',
                  'Parcelas que cabem no seu bolso'
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-4 text-gray-300 text-lg">
                    <span className="text-yellow-500 font-bold text-2xl mt-1">-</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ) : (
            <div className="fade-in-up space-y-8">
              <ul className="space-y-8">
                {[
                  'Capital de giro para o seu negócio',
                  'Investimento em estoque e equipamentos',
                  'Organização do fluxo de caixa',
                  'Análise focada no potencial do seu negócio',
                  'Condições flexíveis e personalizadas'
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-4 text-gray-300 text-lg">
                    <span className="text-yellow-500 font-bold text-2xl mt-1">-</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </section>

      {/* Testimonials - Muito espaçado */}
      <section className="py-32 px-4 bg-gray-900/30">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-5xl font-bold text-center text-white mb-24">O Que Dizem</h2>
          
          <div className="grid md:grid-cols-3 gap-12">
            {[
              {
                name: 'Motorista Uber',
                text: 'Precisava de dinheiro urgente para consertar meu carro e em 2 dias estava com o valor na conta.'
              },
              {
                name: 'Dona de Loja',
                text: 'Atendimento excelente! Explicaram tudo direitinho e não tive surpresas.'
              },
              {
                name: 'Motorista 99',
                text: 'Sem burocracia mesmo! Fiz tudo pelo WhatsApp, enviei meus dados e pronto.'
              }
            ].map((testimonial, idx) => (
              <div key={idx} className="card space-y-6">
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-yellow-500 text-2xl">★</span>
                  ))}
                </div>
                <p className="text-gray-300 text-lg leading-relaxed">"{testimonial.text}"</p>
                <p className="font-semibold text-white text-base">{testimonial.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works - Muito limpo */}
      <section className="py-32 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-5xl font-bold text-center text-white mb-24">Como Funciona?</h2>
          
          <div className="grid md:grid-cols-5 gap-8">
            {[
              { num: '1', title: 'Clique', desc: 'Abra o WhatsApp' },
              { num: '2', title: 'Fale', desc: 'Com especialista' },
              { num: '3', title: 'Envie', desc: 'Seus dados' },
              { num: '4', title: 'Análise', desc: 'Até 24h' },
              { num: '5', title: 'Receba', desc: 'Na conta' }
            ].map((step, idx) => (
              <div key={idx} className="text-center space-y-6">
                <div className="w-16 h-16 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-full flex items-center justify-center mx-auto">
                  <span className="text-black font-bold text-2xl">{step.num}</span>
                </div>
                <h4 className="font-bold text-white text-lg">{step.title}</h4>
                <p className="text-gray-400 text-base">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ - Muito espaçado */}
      <section className="py-32 px-4 bg-gray-900/30">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-5xl font-bold text-center text-white mb-24">Dúvidas?</h2>
          
          <div className="space-y-12">
            {[
              {
                q: '🔒 Meus dados estão seguros?',
                a: 'Sim! Usamos as melhores práticas de segurança digital. Seus dados são criptografados.'
              },
              {
                q: '💡 Tem taxas escondidas?',
                a: 'Não! Somos 100% transparentes. Você saberá exatamente quanto vai pagar.'
              },
              {
                q: '📊 Meu score é baixo?',
                a: 'Sim! Não analisamos apenas números. Avaliamos seu histórico e capacidade.'
              },
              {
                q: '⏱️ Quanto tempo leva?',
                a: 'Análise em até 24 horas e liberação em até 24 horas após aprovação.'
              },
              {
                q: '📱 Preciso ir em agência?',
                a: 'Não! Tudo é 100% digital pelo WhatsApp. Resolve tudo pelo celular.'
              }
            ].map((faq, idx) => (
              <div key={idx} className="border-l-4 border-yellow-500 pl-6 space-y-3">
                <h4 className="font-bold text-white text-lg">{faq.q}</h4>
                <p className="text-gray-400 text-base leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final - Muito espaço */}
      <section className="py-32 px-4 text-center">
        <div className="max-w-2xl mx-auto space-y-12">
          <h2 className="text-5xl font-bold text-white">Não Deixe Para Depois</h2>
          <p className="text-xl text-gray-300 leading-relaxed">
            Quanto mais rápido você agir, mais rápido terá o dinheiro que precisa.
          </p>
          <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="btn btn-primary text-lg px-10 py-4 inline-block" onClick={trackWhatsAppClick}>
            Solicitar Agora
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 border-t border-gray-800 text-center text-gray-500 text-sm">
        <p>© 2024 Crédito Finanças. Todos os direitos reservados.</p>
      </footer>
    </div>
  )
}

export default App
