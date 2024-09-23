import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import CreateCampaign from '../components/CreateCampaign';
import CampaignList from '../components/CampaignList';
import MetricsOverview from '../components/MetricsOverview';

export default function Home() {
  return (
    <div>
      <Navbar />
      <main>
        <section className="hero-section">
          <h1>Bienvenido a EasyAds</h1>
          <p>Gestión fácil de campañas publicitarias para tu negocio.</p>
          <button className="cta-button">Comenzar ahora</button>
        </section>

        {/* Sección para crear una campaña rápida */}
        <section className="create-campaign-section">
          <h2>Crea tu campaña publicitaria</h2>
          <CreateCampaign />
        </section>

        {/* Sección para mostrar la lista de campañas activas */}
        <section className="campaign-list-section">
          <h2>Campañas Activas</h2>
          <CampaignList />
        </section>

        {/* Sección para mostrar métricas de rendimiento */}
        <section className="metrics-overview-section">
          <h2>Resumen de Métricas</h2>
          <MetricsOverview />
        </section>

      </main>
      <Footer />
    </div>
  );
}
