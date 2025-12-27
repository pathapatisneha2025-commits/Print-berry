import React from 'react';

const FeaturedClients = () => {
  const clients = [
    { name: 'Yamaha', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Yamaha_Motor_Corporation_logo.svg/512px-Yamaha_Motor_Corporation_logo.svg.png' },
    { name: 'Toni & Guy', logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/a/a2/Toni_%26_Guy_Logo.svg/512px-Toni_%26_Guy_Logo.svg.png' },
    { name: 'Lenskart', logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/a/a0/Lenskart_logo.svg/512px-Lenskart_logo.svg.png' },
    { name: 'KIMS', logo: 'https://www.kimshospitals.com/images/logo.png' },
    { name: 'Kidzee', logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/8/84/Kidzee_Logo.png/512px-Kidzee_Logo.png' },
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
