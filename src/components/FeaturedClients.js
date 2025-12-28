import React from 'react';

const FeaturedClients = () => {
  const clients = [
    { name: 'Yamaha', logo: 'yamaha.png' },
    { name: 'Toni & Guy', logo: 'tonyguy.jpeg' },
    { name: 'Lenskart', logo: 'Lenskart.png' },
    { name: 'KIMS', logo: 'kims.png' },
    { name: 'Kidzee', logo: 'Kidzee.jpeg' },
  ];

  return (
    <div style={{ padding: '80px 20px', textAlign: 'center', background: '#111', color: '#fff', fontFamily: 'Segoe UI, Tahoma, Geneva, Verdana, sans-serif' }}>
      <h2 style={{ fontSize: '42px', fontWeight: 600, marginBottom: 8 }}>
        Featured <span style={{ color: '#FFC107' }}>Clients</span>
      </h2>
      <p style={{ color: '#aaa', fontSize: '18px', marginBottom: '50px' }}>Some of the brands that we have worked for.</p>

      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '20px', maxWidth: '1200px', margin: '0 auto' }}>
        {clients.map((client, index) => (
          <div key={index} style={{
            width: '200px',
            height: '140px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            border: '1px solid #333',
            padding: '20px',
            background: '#1a1a1a',
            transition: 'all 0.3s ease',
          }}>
            <img src={client.logo} alt={client.name} style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedClients;
