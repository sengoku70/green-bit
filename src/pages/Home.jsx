import React, { useState } from 'react';
import { ArrowRight, Leaf, ShieldAlert, Trees, Droplet, Globe, CheckCircle } from 'lucide-react';

// Solutions Data
const SOLUTIONS = [
  {
    id: 'global-warming',
    title: 'Global Warming',
    short: 'Learn the consequences of greenhouse gases on our atmosphere and global temperature.',
    details: 'Greenhouse gases like carbon dioxide and methane trap heat in the atmosphere, causing global temperatures to rise. This leads to melting ice caps, rising sea levels, and more extreme weather events. Solutions include transition to solar/wind power, energy efficiency, and reducing emissions.',
    icon: Globe,
    image: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=800&auto=format&fit=crop&q=80',
  },
  {
    id: 'soil-pollution',
    title: 'Soil Pollution',
    short: 'Know more about the health of soil and how degradation affects food security.',
    details: 'Soil pollution is caused by industrial activity, agricultural chemicals, and improper waste disposal. It degrades soil quality, poisons crops, and threatens global food security. Solutions involve organic farming, bio-remediation, and stricter industrial waste controls.',
    icon: ShieldAlert,
    image: 'https://images.unsplash.com/photo-1530587191325-3db32d826c18?w=800&auto=format&fit=crop&q=80',
  },
  {
    id: 'deforestation',
    title: 'Deforestation',
    short: 'Learn about the effects of deforestation on wildlife, ecosystems, and climate.',
    details: 'Forests act as carbon sinks and house 80% of terrestrial biodiversity. Rapid clearing for agriculture and logging releases massive carbon dioxide and causes habitat loss. Solutions include global reforestation campaigns, sustainable forestry, and paper recycling.',
    icon: Trees,
    image: 'https://images.unsplash.com/photo-1448375240586-882707db888b?w=800&auto=format&fit=crop&q=80',
  },
  {
    id: 'water-pollution',
    title: 'Water Pollution',
    short: 'Know about the effects of dumping waste and plastics on marine life.',
    details: 'Millions of tons of plastic, sewage, and chemical runoff enter oceans annually, killing marine life and disrupting food chains. Solutions include upgrading sewage treatment, eliminating single-use plastics, and cleaning waterways.',
    icon: Droplet,
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&auto=format&fit=crop&q=80',
  },
  {
    id: 'desertification',
    title: 'Desertification',
    short: 'Learn the consequences of human intervention on desertification of soil.',
    details: 'Overgrazing, deforestation, and poor agricultural practices turn fertile land into dry desert, displacing communities and reducing arable land. Solutions include planting windbreaks, rotational grazing, and soil hydration structures.',
    icon: Leaf,
    image: 'https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?w=800&auto=format&fit=crop&q=80',
  },
];

// Geological Structures Data
const GEOLOGY = [
  {
    id: 'crater',
    title: 'Craters',
    desc: 'Craters typically form when a meteoroid, asteroid, or comet collides with a planetary surface. Upon impact, kinetic energy is converted into heat and shock waves, excavating a bowl-shaped depression. Material is ejected radially, forming a distinctive rim and sometimes secondary craters. Over time, erosion and geological processes can modify the crater\'s appearance.',
    bg: 'https://images.unsplash.com/photo-1506703719100-a0f3a48c0f86?w=1200&auto=format&fit=crop&q=80',
    thumb: 'https://images.unsplash.com/photo-1506703719100-a0f3a48c0f86?w=200&auto=format&fit=crop&q=80',
  },
  {
    id: 'river',
    title: 'Rivers',
    desc: 'Rivers form when precipitation (rain or snow) collects and flows due to gravity, usually starting from highland areas. Small streams, called headwaters, emerge from springs or runoff and merge, forming larger streams and rivers. These rivers carve out channels in the landscape, aided by erosion and sediment transport. As they flow towards lower elevations, rivers can join other watercourses, growing larger, eventually reaching a lake, sea, or ocean.',
    bg: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=1200&auto=format&fit=crop&q=80',
    thumb: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=200&auto=format&fit=crop&q=80',
  },
  {
    id: 'mountains',
    title: 'Mountains',
    desc: 'Mountains are formed through tectonic processes where tectonic plates collide or converge. The collision leads to intense pressure, causing the Earth\'s crust to buckle and fold, forming mountain ranges. Additionally, volcanic activity can contribute to mountain formation when magma erupts and solidifies. Erosion plays a role as well, sculpting the mountains over time.',
    bg: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1200&auto=format&fit=crop&q=80',
    thumb: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=200&auto=format&fit=crop&q=80',
  },
  {
    id: 'deltas',
    title: 'Deltas',
    desc: 'Deltas form at the mouths of rivers where sediment carried by the flowing water is deposited as it meets slower-moving or stagnant bodies of water, such as oceans or lakes. The river\'s velocity decreases, causing it to lose its carrying capacity, leading to sediment deposition. Over time, this accumulation builds up, creating a fan-shaped landform known as a delta.',
    bg: 'https://images.unsplash.com/photo-1432406776043-6cb86ff1a2be?w=1200&auto=format&fit=crop&q=80',
    thumb: 'https://images.unsplash.com/photo-1432406776043-6cb86ff1a2be?w=200&auto=format&fit=crop&q=80',
  },
  {
    id: 'canyons',
    title: 'Canyons',
    desc: 'Canyons are formed primarily by the erosive activity of rivers over millions of years. As a river cuts through the landscape, it erodes the soil and rock along its path. The harder rock layers resist erosion better than the softer layers, leading to the development of steep walls. Over time, the river deepens and widens its valley, eventually creating a canyon.',
    bg: 'https://images.unsplash.com/photo-1474524973796-c3abf3994e77?w=1200&auto=format&fit=crop&q=80',
    thumb: 'https://images.unsplash.com/photo-1474524973796-c3abf3994e77?w=200&auto=format&fit=crop&q=80',
  },
  {
    id: 'caves',
    title: 'Crystal Caves',
    desc: 'Crystal caves are subterranean chambers formed over millennia through geothermal activity, chemical reactions, and mineral crystallization. Ground water saturated with minerals drips or flows slowly through underground openings, depositing minerals like calcite or gypsum. Over centuries, these minerals build massive, reflecting columns and crystals.',
    bg: 'https://images.unsplash.com/photo-1507208773393-40d9fc670acf?w=1200&auto=format&fit=crop&q=80',
    thumb: 'https://images.unsplash.com/photo-1507208773393-40d9fc670acf?w=200&auto=format&fit=crop&q=80',
  },
  {
    id: 'volcano',
    title: 'Volcanoes',
    desc: 'Volcanoes form over hotspots or along tectonic plate boundaries when magma rises from the Earth\'s mantle to the surface. As tectonic plates diverge or subduct, pressure drops or water lowers the melting point of rocks, generating magma. When this magma breaches the crust, it results in volcanic eruptions of lava, ash, and gases, building volcanic mountains.',
    bg: 'https://images.unsplash.com/photo-1606596160867-fa0329ff07f4?w=1200&auto=format&fit=crop&q=80',
    thumb: 'https://images.unsplash.com/photo-1606596160867-fa0329ff07f4?w=200&auto=format&fit=crop&q=80',
  },
];

function Home() {
  const [selectedGeo, setSelectedGeo] = useState(GEOLOGY[0]);
  const [activeSolution, setActiveSolution] = useState(null);

  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-video-container">
          <video 
            className="hero-video" 
            autoPlay 
            muted 
            loop 
            playsInline
          >
            <source 
              src="https://player.vimeo.com/external/371433846.sd.mp4?s=236da2f3c0227e3dc26a310c144febe0da3c8d17&profile_id=139&oauth2_token_id=57447761" 
              type="video/mp4" 
            />
          </video>
        </div>
        
        <div className="hero-overlay-content">
          <h1 className="hero-tagline">
            The Earth is what we all have in common.
          </h1>
          <p className="hero-subtext">
            Join the movement toward cleaner energy, sustainable consumption, and environmental protection. Discover geological wonders and shop eco-friendly.
          </p>
          <a href="#solutions" className="btn-hero-cta">
            Explore Solutions
          </a>
        </div>
      </section>

      {/* Solutions Grid Section */}
      <section id="solutions" style={{ padding: '40px 0' }}>
        <h2 className="section-title">Our Environmental Solutions</h2>
        <div className="solutions-grid">
          {SOLUTIONS.map((item) => {
            const IconComponent = item.icon;
            const isOpen = activeSolution === item.id;

            return (
              <div 
                key={item.id} 
                className="solution-card"
                onClick={() => setActiveSolution(isOpen ? null : item.id)}
                style={{ cursor: 'pointer' }}
              >
                <div className="solution-card-img-container">
                  <img src={item.image} alt={item.title} className="solution-card-img" />
                </div>
                <div className="solution-card-content">
                  <div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
                      <IconComponent size={24} color="#10b981" />
                      <h3 className="solution-card-title">{item.title}</h3>
                    </div>
                    <p className="solution-card-description">
                      {isOpen ? item.details : item.short}
                    </p>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', marginTop: '15px', color: '#10b981', fontWeight: '700', fontSize: '14px' }}>
                    <span>{isOpen ? 'Show less' : 'Read more'}</span>
                    <ArrowRight size={16} style={{ marginLeft: '5px', transform: isOpen ? 'rotate(-90deg)' : 'none', transition: 'transform 0.2s' }} />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Divider CTA section */}
      <section className="parallax-tagline-section" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?w=1200&auto=format&fit=crop&q=80")' }}>
        <h2>Make a difference today.</h2>
        <button onClick={() => alert('Welcome to #bitgreen! Check out our newsletter or shopping page to contribute!')}>
          join #bitgreen
        </button>
      </section>

      {/* Geological Formations Section */}
      <section id="geology" className="geology-showcase">
        <h2 className="section-title">Geological Wonders & Formations</h2>
        
        <div className="geology-buttons">
          {GEOLOGY.map((geo) => (
            <button 
              key={geo.id}
              className={`geology-btn ${selectedGeo.id === geo.id ? 'active' : ''}`}
              onClick={() => setSelectedGeo(geo)}
              aria-label={`Show info about ${geo.title}`}
            >
              <img src={geo.thumb} alt={geo.title} />
              <div className="geology-btn-label">{geo.title}</div>
            </button>
          ))}
        </div>

        <div className="geology-display-container">
          {GEOLOGY.map((geo) => (
            <div 
              key={geo.id} 
              className={`geology-slide ${selectedGeo.id === geo.id ? 'active' : ''}`}
              style={{ backgroundImage: `url(${geo.bg})` }}
            >
              <div className="geology-slide-overlay"></div>
              <div className="geology-slide-content">
                <h3 className="geology-slide-title">{geo.title}</h3>
                <p className="geology-slide-desc">{geo.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Home;
