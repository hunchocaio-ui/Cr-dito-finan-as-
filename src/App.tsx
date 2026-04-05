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

      {/* Hero Section */}
      <section className="pt-40 pb-32 px-4 text-center">
        <div className="max-w-2xl mx-auto fade-in-up">
          <h1 className="text-6xl md:text-7xl font-bold text-white mb-12 leading-tight">
            Dinheiro Rápido na Sua Conta
          </h1>
          
          <p className="text-2xl text-gray-300 mb-8 leading-relaxed">
            Aprovação em até 24 horas • Sem burocracia • Atendimento humanizado
          </p>
          
          <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="btn btn-primary text-lg px-10 py-4 inline-block" onClick={trackWhatsAppClick}>
            Falar no WhatsApp Agora
          </a>
        </div>
      </section>

      {/* Benefits Section - Cards com fundo colorido */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-white mb-16">Por Que Escolher a Crédito Finanças?</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: '⚡', title: 'Aprovação Rápida', desc: 'Análise de crédito em poucas horas, não em dias', color: 'from-yellow-500/20 to-yellow-600/10' },
              { icon: '📋', title: 'Sem Burocracia', desc: 'Processo simples e direto, sem papelada desnecessária', color: 'from-orange-500/20 to-orange-600/10' },
              { icon: '💰', title: 'Liberação Ágil', desc: 'Dinheiro na sua conta em até 24 horas após aprovação', color: 'from-yellow-500/20 to-yellow-600/10' },
              { icon: '👤', title: 'Atendimento Humanizado', desc: 'Especialistas dedicados a entender sua situação', color: 'from-orange-500/20 to-orange-600/10' },
              { icon: '✅', title: 'Score Médio Aceito', desc: 'Analisamos seu perfil, não apenas números', color: 'from-yellow-500/20 to-yellow-600/10' },
              { icon: '🔒', title: '100% Seguro', desc: 'Seus dados protegidos com as melhores práticas', color: 'from-orange-500/20 to-orange-600/10' }
            ].map((benefit, idx) => (
              <div key={idx} className={`card-visual bg-gradient-to-br ${benefit.color} border-l-4 border-yellow-500`}>
                <div className="text-5xl mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-bold text-white mb-3">{benefit.title}</h3>
                <p className="text-gray-300 text-sm leading-relaxed">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Segmented Section - Cards com abas */}
      <section className="py-20 px-4 bg-gray-900/50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-white mb-12">Soluções Personalizadas para Você</h2>
          
          <div className="flex justify-center gap-4 mb-12">
            <button
              onClick={() => setActiveTab('motoristas')}
              className={`px-8 py-3 rounded-lg font-semibold transition-all text-base ${
                activeTab === 'motoristas'
                  ? 'bg-gradient-to-r from-yellow-500 to-orange-500 text-black'
                  : 'bg-gray-800 text-white hover:bg-gray-700'
              }`}
            >
              🚗 Motoristas de Aplicativo
            </button>
            <button
              onClick={() => setActiveTab('comerciantes')}
              className={`px-8 py-3 rounded-lg font-semibold transition-all text-base ${
                activeTab === 'comerciantes'
                  ? 'bg-gradient-to-r from-yellow-500 to-orange-500 text-black'
                  : 'bg-gray-800 text-white hover:bg-gray-700'
              }`}
            >
              🏪 Comerciantes e Donos de Negócios
            </button>
          </div>

          {activeTab === 'motoristas' ? (
            <div className="fade-in-up card-visual-large bg-gradient-to-br from-yellow-500/20 to-yellow-600/10 border-l-4 border-yellow-500">
              <h3 className="text-3xl font-bold text-white mb-8 flex items-center gap-3">
                <span className="text-4xl">🚗</span> Motoristas de Aplicativo
              </h3>
              <ul className="space-y-6">
                {[
                  'Dinheiro para manutenção do veículo',
                  'Capital para rodar mais e faturar mais',
                  'Sem exigências de comprovante de renda formal',
                  'Análise rápida baseada em seu histórico',
                  'Parcelas que cabem no seu bolso'
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-4 text-gray-300 text-lg">
                    <span className="text-green-400 text-2xl mt-0.5">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ) : (
            <div className="fade-in-up card-visual-large bg-gradient-to-br from-orange-500/20 to-orange-600/10 border-l-4 border-orange-500">
              <h3 className="text-3xl font-bold text-white mb-8 flex items-center gap-3">
                <span className="text-4xl">🏪</span> Comerciantes e Donos de Negócios
              </h3>
              <ul className="space-y-6">
                {[
                  'Capital de giro para o seu negócio',
                  'Investimento em estoque e equipamentos',
                  'Organização do fluxo de caixa',
                  'Análise focada no potencial do seu negócio',
                  'Condições flexíveis e personalizadas'
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-4 text-gray-300 text-lg">
                    <span className="text-green-400 text-2xl mt-0.5">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </section>

      {/* Testimonials - Cards visuais */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-white mb-12">O Que Nossos Clientes Dizem</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: 'Motorista Uber - São Paulo',
                text: 'Precisava de dinheiro urgente para consertar meu carro e em 2 dias estava com o valor na conta. Muito rápido mesmo!',
                color: 'from-yellow-500/20 to-yellow-600/10'
              },
              {
                name: 'Fernanda S. - Dona de Loja',
                text: 'Atendimento excelente! Explicaram tudo direitinho e não tive surpresas. Já peguei meu segundo empréstimo com eles.',
                color: 'from-orange-500/20 to-orange-600/10'
              },
              {
                name: 'Roberto L. - Motorista 99',
                text: 'Sem burocracia mesmo! Fiz tudo pelo WhatsApp, enviei meus dados e pronto. Recomendo para todos os meus colegas.',
                color: 'from-yellow-500/20 to-yellow-600/10'
              }
            ].map((testimonial, idx) => (
              <div key={idx} className={`card-visual bg-gradient-to-br ${testimonial.color} border-l-4 border-yellow-500`}>
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-yellow-500 text-2xl">★</span>
                  ))}
                </div>
                <p className="text-gray-300 mb-6 text-base leading-relaxed">"{testimonial.text}"</p>
                <p className="font-semibold text-white text-sm">{testimonial.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works - Cards com números */}
      <section className="py-20 px-4 bg-gray-900/50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-white mb-12">Como Funciona? É Muito Simples!</h2>
          
          <div className="grid md:grid-cols-5 gap-4">
            {[
              { num: '1', title: 'Clique no Botão', desc: 'Abra o WhatsApp e fale conosco' },
              { num: '2', title: 'Fale com Especialista', desc: 'Um especialista vai entender sua necessidade' },
              { num: '3', title: 'Envie Seus Dados', desc: 'Documentos simples e rápidos' },
              { num: '4', title: 'Análise Rápida', desc: 'Resposta em até 24 horas' },
              { num: '5', title: 'Dinheiro Liberado', desc: 'Receba na sua conta em poucas horas' }
            ].map((step, idx) => (
              <div key={idx} className="card-visual bg-gradient-to-br from-yellow-500/20 to-yellow-600/10 border-l-4 border-yellow-500 text-center">
                <div className="w-14 h-14 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-black font-bold text-xl">{step.num}</span>
                </div>
                <h4 className="font-bold text-white text-base mb-2">{step.title}</h4>
                <p className="text-gray-400 text-sm">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ - Cards com bordas */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-white mb-12">Suas Dúvidas Respondidas</h2>
          
          <div className="space-y-6">
            {[
              {
                q: '🔒 Meus dados estão seguros?',
                a: 'Sim! Usamos as melhores práticas de segurança digital. Seus dados são criptografados e protegidos conforme as normas de proteção de dados.',
                color: 'from-yellow-500/20 to-yellow-600/10'
              },
              {
                q: '💡 Tem taxas escondidas?',
                a: 'Não! Somos 100% transparentes. Você saberá exatamente quanto vai pagar antes de assinar qualquer contrato. Sem surpresas.',
                color: 'from-orange-500/20 to-orange-600/10'
              },
              {
                q: '📊 Meu score é baixo, consigo?',
                a: 'Sim! Não analisamos apenas números. Avaliamos seu histórico, sua renda e sua capacidade de pagamento de forma humanizada.',
                color: 'from-yellow-500/20 to-yellow-600/10'
              },
              {
                q: '⏱️ Quanto tempo leva mesmo?',
                a: 'Análise em até 24 horas e liberação do dinheiro em até 24 horas após aprovação. Na maioria dos casos, muito mais rápido!',
                color: 'from-orange-500/20 to-orange-600/10'
              },
              {
                q: '📱 Preciso ir em alguma agência?',
                a: 'Não! Tudo é 100% digital pelo WhatsApp. Você não sai de casa e resolve tudo pelo seu celular.',
                color: 'from-yellow-500/20 to-yellow-600/10'
              }
            ].map((faq, idx) => (
              <div key={idx} className={`card-visual bg-gradient-to-br ${faq.color} border-l-4 border-yellow-500`}>
                <h4 className="font-bold text-white text-lg mb-3">{faq.q}</h4>
                <p className="text-gray-300 text-base leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 px-4 bg-gray-900/50 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold text-white mb-6">Não Deixe Para Depois</h2>
          <p className="text-lg text-gray-300 mb-8 leading-relaxed">
            Quanto mais rápido você agir, mais rápido terá o dinheiro que precisa. Fale com um especialista agora mesmo!
          </p>
          <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="btn btn-primary text-lg px-10 py-4 inline-block" onClick={trackWhatsAppClick}>
            Solicitar Meu Empréstimo Agora
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-gray-800 text-center text-gray-500 text-sm">
        <p>© 2024 Crédito Finanças. Todos os direitos reservados.</p>
      </footer>
    </div>
  )
}

export default App
