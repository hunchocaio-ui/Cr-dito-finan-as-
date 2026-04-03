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
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900">
      {/* Header */}
      <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-gray-900/95 backdrop-blur-md shadow-lg' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-lg flex items-center justify-center">
              <span className="text-gray-900 font-bold text-lg">₢</span>
            </div>
            <h1 className="text-xl font-bold text-white">Crédito Finanças</h1>
          </div>
          <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="btn btn-primary" onClick={trackWhatsAppClick}>
            Falar no WhatsApp
          </a>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 text-center">
        <div className="max-w-4xl mx-auto fade-in-up">
          <div className="inline-block mb-6 px-4 py-2 bg-yellow-500/10 border border-yellow-500/30 rounded-full">
            <span className="text-yellow-400 font-semibold text-sm">✨ Aprovação em Minutos</span>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Dinheiro Rápido na Sua Conta
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
            Empréstimo sem burocracia para motoristas de aplicativo e comerciantes. Aprovação em minutos, dinheiro liberado na hora.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="btn btn-primary text-lg px-8 py-4" onClick={trackWhatsAppClick}>
              💬 Falar no WhatsApp Agora
            </a>
            <button className="btn btn-outline text-lg px-8 py-4">
              Como Funciona
            </button>
          </div>

          {/* Trust Badges */}
          <div className="flex flex-wrap justify-center gap-6 text-gray-400 text-sm">
            <div className="flex items-center gap-2">
              <span className="text-green-400">✓</span> Processo 100% Seguro
            </div>
            <div className="flex items-center gap-2">
              <span className="text-green-400">✓</span> Sem Taxas Escondidas
            </div>
            <div className="flex items-center gap-2">
              <span className="text-green-400">✓</span> Transparência Total
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 bg-gray-800/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-white mb-16">Por Que Escolher a Crédito Finanças?</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: '⚡', title: 'Aprovação Rápida', desc: 'Análise em minutos, não em dias. Decisão imediata.' },
              { icon: '📋', title: 'Sem Burocracia', desc: 'Processo simplificado. Poucos documentos necessários.' },
              { icon: '💰', title: 'Liberação Ágil', desc: 'Dinheiro na sua conta em poucas horas.' },
              { icon: '👥', title: 'Atendimento Humanizado', desc: 'Equipe preparada para entender sua necessidade.' },
              { icon: '✅', title: 'Processo Simples', desc: 'Tudo pelo WhatsApp. Fácil e prático.' },
              { icon: '🔒', title: 'Totalmente Seguro', desc: 'Seus dados protegidos com criptografia.' }
            ].map((benefit, idx) => (
              <div key={idx} className="card group">
                <div className="text-4xl mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-bold text-white mb-3">{benefit.title}</h3>
                <p className="text-gray-300">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Segmented Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-white mb-16">Soluções Personalizadas</h2>
          
          <div className="flex justify-center gap-4 mb-12">
            <button
              onClick={() => setActiveTab('motoristas')}
              className={`px-8 py-3 rounded-lg font-semibold transition-all ${
                activeTab === 'motoristas'
                  ? 'bg-yellow-500 text-gray-900'
                  : 'bg-gray-700 text-white hover:bg-gray-600'
              }`}
            >
              🚗 Motoristas de App
            </button>
            <button
              onClick={() => setActiveTab('comerciantes')}
              className={`px-8 py-3 rounded-lg font-semibold transition-all ${
                activeTab === 'comerciantes'
                  ? 'bg-yellow-500 text-gray-900'
                  : 'bg-gray-700 text-white hover:bg-gray-600'
              }`}
            >
              🏪 Comerciantes
            </button>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              {activeTab === 'motoristas' ? (
                <div className="fade-in-up">
                  <h3 className="text-3xl font-bold text-white mb-6">Para Motoristas de Aplicativo</h3>
                  <ul className="space-y-4">
                    {[
                      '💵 Dinheiro para manutenção do veículo',
                      '🚗 Capital para rodar mais e faturar mais',
                      '⚡ Aprovação facilitada para motoristas',
                      '📱 Processo 100% pelo WhatsApp',
                      '🎯 Sem necessidade de comprovante de renda complexo'
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-start gap-4 text-gray-300">
                        <span className="text-yellow-400 text-xl mt-1">✓</span>
                        <span className="text-lg">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ) : (
                <div className="fade-in-up">
                  <h3 className="text-3xl font-bold text-white mb-6">Para Comerciantes</h3>
                  <ul className="space-y-4">
                    {[
                      '💼 Capital de giro para o negócio',
                      '📈 Expansão rápida do seu empreendimento',
                      '💰 Organização do fluxo de caixa',
                      '📊 Análise flexível de faturamento',
                      '🤝 Parceria de longo prazo'
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-start gap-4 text-gray-300">
                        <span className="text-yellow-400 text-xl mt-1">✓</span>
                        <span className="text-lg">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
            
            <div className="bg-gradient-to-br from-yellow-500/20 to-yellow-600/10 border border-yellow-500/30 rounded-2xl p-8">
              <div className="space-y-6">
                <div className="text-center">
                  <div className="text-5xl font-bold text-yellow-400 mb-2">Até R$ 50.000</div>
                  <p className="text-gray-300">Limite disponível</p>
                </div>
                <div className="border-t border-yellow-500/30 pt-6">
                  <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="btn btn-primary w-full block" onClick={trackWhatsAppClick}>
                    Solicitar Agora
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof Section */}
      <section className="py-20 px-4 bg-gray-800/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-white mb-16">Clientes Satisfeitos</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: 'Carlos M.',
                role: 'Motorista Uber',
                text: 'Consegui o empréstimo em menos de 2 horas! Muito rápido e fácil. Recomendo!',
                rating: 5
              },
              {
                name: 'Fernanda S.',
                role: 'Loja de Roupas',
                text: 'Excelente atendimento. Consegui capital para expandir meu negócio sem complicações.',
                rating: 5
              },
              {
                name: 'João P.',
                role: 'Motorista 99',
                text: 'Transparência total. Sem taxas escondidas. Muito satisfeito com o processo.',
                rating: 5
              }
            ].map((testimonial, idx) => (
              <div key={idx} className="card">
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-yellow-400">★</span>
                  ))}
                </div>
                <p className="text-gray-300 mb-6 italic">"{testimonial.text}"</p>
                <div>
                  <p className="font-bold text-white">{testimonial.name}</p>
                  <p className="text-gray-400 text-sm">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-white mb-16">Como Funciona</h2>
          
          <div className="grid md:grid-cols-5 gap-4 mb-12">
            {[
              { num: '1', title: 'Clique no Botão', desc: 'Abra o WhatsApp' },
              { num: '2', title: 'Fale Conosco', desc: 'Converse com nosso time' },
              { num: '3', title: 'Envie Dados', desc: 'Informações básicas' },
              { num: '4', title: 'Receba Análise', desc: 'Decisão rápida' },
              { num: '5', title: 'Dinheiro Liberado', desc: 'Na sua conta' }
            ].map((step, idx) => (
              <div key={idx} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-gray-900">{step.num}</span>
                </div>
                <h3 className="font-bold text-white mb-2">{step.title}</h3>
                <p className="text-gray-400 text-sm">{step.desc}</p>
                {idx < 4 && <div className="hidden md:block absolute right-0 top-1/2 w-8 h-0.5 bg-yellow-500/30 transform -translate-y-1/2"></div>}
              </div>
            ))}
          </div>

          <div className="text-center">
            <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="btn btn-primary text-lg px-8 py-4">
              Começar Agora
            </a>
          </div>
        </div>
      </section>

      {/* Objection Breaker */}
      <section className="py-20 px-4 bg-gray-800/50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-white mb-16">Suas Dúvidas Respondidas</h2>
          
          <div className="space-y-6">
            {[
              {
                q: '🔒 É seguro compartilhar meus dados?',
                a: 'Sim! Utilizamos criptografia de ponta e protegemos seus dados com os mais altos padrões de segurança do mercado.'
              },
              {
                q: '💰 Há taxas escondidas?',
                a: 'Não! Somos totalmente transparentes. Você saberá exatamente quanto vai pagar antes de aceitar o empréstimo.'
              },
              {
                q: '⚡ Quanto tempo leva para aprovar?',
                a: 'Em média 15 a 30 minutos. Analisamos seu caso rapidamente e informamos a decisão via WhatsApp.'
              },
              {
                q: '💵 Qual é o valor mínimo e máximo?',
                a: 'Oferecemos desde R$ 500 até R$ 50.000, dependendo do seu perfil e necessidade.'
              }
            ].map((item, idx) => (
              <div key={idx} className="card">
                <h3 className="text-lg font-bold text-white mb-3">{item.q}</h3>
                <p className="text-gray-300">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-4 bg-gradient-to-r from-yellow-500/20 to-yellow-600/10 border-t border-yellow-500/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Não Perca Essa Oportunidade!</h2>
          <p className="text-xl text-gray-300 mb-8">
            Milhares de motoristas e comerciantes já confiam em nós. Seja você o próximo a transformar sua situação financeira.
          </p>
          <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="btn btn-primary text-lg px-10 py-5 inline-block">
            💬 Falar no WhatsApp Agora - É Grátis!
          </a>
          <p className="text-gray-400 text-sm mt-6">Resposta em minutos • Sem compromisso • 100% Seguro</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 border-t border-gray-700 py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-lg flex items-center justify-center">
                  <span className="text-gray-900 font-bold">₢</span>
                </div>
                <span className="font-bold text-white">Crédito Finanças</span>
              </div>
              <p className="text-gray-400 text-sm">Empréstimos rápidos e seguros para você.</p>
            </div>
            <div>
              <h4 className="font-bold text-white mb-4">Produto</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><a href="#" className="hover:text-yellow-400">Como Funciona</a></li>
                <li><a href="#" className="hover:text-yellow-400">Benefícios</a></li>
                <li><a href="#" className="hover:text-yellow-400">Valores</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-white mb-4">Empresa</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><a href="#" className="hover:text-yellow-400">Sobre Nós</a></li>
                <li><a href="#" className="hover:text-yellow-400">Contato</a></li>
                <li><a href="#" className="hover:text-yellow-400">Blog</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-white mb-4">Legal</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><a href="#" className="hover:text-yellow-400">Privacidade</a></li>
                <li><a href="#" className="hover:text-yellow-400">Termos</a></li>
                <li><a href="#" className="hover:text-yellow-400">Segurança</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-700 pt-8">
            <p className="text-gray-400 text-sm text-center">
              © 2026 Crédito Finanças. Todos os direitos reservados. | CNPJ: XX.XXX.XXX/0001-XX
            </p>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="fixed bottom-8 right-8 w-16 h-16 bg-green-500 rounded-full flex items-center justify-center text-white text-2xl shadow-lg hover:shadow-xl hover:scale-110 transition-all z-40">
        💬
      </a>
    </div>
  )
}

export default App
