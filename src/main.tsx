import { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import logoUrl from '../logo.png'
import './styles.css'

const products = [
  {
    name: 'Tilo: Resimli Yapboz',
    tagline: 'Fotoğraflardan keyifli yapbozlar.',
    description:
      'Kendi fotoğrafını seç, yapboza çevir ve sakin bir oyun akışında tamamla. Kısa molalar, rahatlamak ve küçük bir odak anı yakalamak için tasarlandı.',
    meta: ['iOS + iPadOS', 'Puzzle / Casual', 'Free'],
    accent: 'aqua',
    icon:
      'https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/f0/4a/ce/f04acefc-e39b-5c1a-da06-cd2b5ac578f7/AppIcon-0-0-1x_U007epad-0-1-85-220.png/512x512bb.jpg',
    url: 'https://apps.apple.com/us/app/tilo-resimli-yapboz/id6758107357',
  },
  {
    name: 'Grid Grin: Block Puzzle',
    tagline: 'Basit görünen, akılda kalan blok bulmaca.',
    description:
      'Blokları yerleştir, alan aç, komboları kovala. Zaman baskısı yok; sadece temiz bir bulmaca ritmi ve kendi rekorunu geçme isteği var.',
    meta: ['iOS + iPadOS', 'Puzzle / Casual', 'Free'],
    accent: 'lime',
    icon:
      'https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/f8/83/fc/f883fcb2-223e-1878-56d3-41fb65b548ec/AppIcon-0-0-1x_U007epad-0-1-85-220.png/512x512bb.jpg',
    url: 'https://apps.apple.com/us/app/grid-grin-block-puzzle/id6758456888',
  },
]

const capabilities = [
  'Mobil uygulama geliştirme',
  'Oyun tasarımı ve geliştirme',
  'Arayüz ve ürün deneyimi',
  'App Store yayın süreci',
]

function App() {
  return (
    <div className="site-shell">
      <Header />
      <main>
        <Hero />
        <Products />
        <Studio />
        <Contact />
      </main>
    </div>
  )
}

function Header() {
  return (
    <header className="topbar">
      <a className="brand" href="#top" aria-label="Tecktick ana sayfa">
        <img src={logoUrl} alt="" />
        <span>Tecktick</span>
      </a>
      <nav className="nav" aria-label="Ana navigasyon">
        <a href="#products">Ürünler</a>
        <a href="#studio">Stüdyo</a>
        <a href="#contact">İletişim</a>
      </nav>
    </header>
  )
}

function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero-copy">
        <p className="section-kicker">Tecktick</p>
        <h1>Mobil uygulamalar ve oyunlar geliştiriyoruz.</h1>
        <p className="hero-text">
          Küçük ama iyi hissettiren ürünler yapıyoruz. Oyun, mobil uygulama ve
          yazılım tarafında fikri sadeleştirip yayına hazır bir deneyime
          dönüştürüyoruz.
        </p>
        <div className="hero-actions">
          <a className="primary-action" href="#products">
            Ürünleri gör
          </a>
          <a className="secondary-action" href="#studio">
            Biz ne yapıyoruz?
          </a>
        </div>
      </div>

      <div className="hero-visual" aria-hidden="true">
        <div className="logo-stage">
          <img src={logoUrl} alt="" />
          <span className="orbit orbit-one" />
          <span className="orbit orbit-two" />
        </div>
        <div className="signal-panel">
          <span>Yayında</span>
          <strong>2 iOS ürünü</strong>
        </div>
      </div>
    </section>
  )
}

function Products() {
  return (
    <section className="section products-section" id="products">
      <div className="section-heading">
        <p className="section-kicker">Ürünler</p>
        <h2>Şimdilik iki oyunumuz App Store’da.</h2>
      </div>

      <div className="product-grid">
        {products.map((product) => (
          <article className={`product-card ${product.accent}`} key={product.name}>
            <div className="product-topline">
              <img src={product.icon} alt={`${product.name} ikonu`} />
              <div>
                <h3>{product.name}</h3>
                <p>{product.tagline}</p>
              </div>
            </div>
            <p className="product-description">{product.description}</p>
            <div className="meta-row">
              {product.meta.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
            <a className="store-link" href={product.url} target="_blank" rel="noreferrer">
              App Store’da aç
            </a>
          </article>
        ))}
      </div>
    </section>
  )
}

function Studio() {
  return (
    <section className="section studio-section" id="studio">
      <div className="studio-copy">
        <p className="section-kicker">Stüdyo</p>
        <h2>Bir fikri alıp kullanılabilir bir ürüne çeviriyoruz.</h2>
        <p>
          Büyük laflardan çok ürünün elde nasıl hissettirdiğine bakıyoruz. Hızlı
          açılıyor mu, anlaşılır mı, oynaması veya kullanması keyifli mi? Bizim
          için iyi ürün biraz da bu sorulara dürüst cevap verebilmektir.
        </p>
      </div>

      <div className="capability-list">
        {capabilities.map((capability, index) => (
          <div className="capability-item" key={capability}>
            <span>{String(index + 1).padStart(2, '0')}</span>
            <strong>{capability}</strong>
          </div>
        ))}
      </div>
    </section>
  )
}

function Contact() {
  return (
    <section className="contact-section" id="contact">
      <p className="section-kicker">İletişim</p>
      <h2>Yeni ürünler ve iş birlikleri için konuşabiliriz.</h2>
      <p>
        Kısa bir not yeter. Uygun olduğumuzda dönüş yaparız.
      </p>
      <a className="primary-action" href="mailto:account@tecktick.com">
        account@tecktick.com
      </a>
    </section>
  )
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
