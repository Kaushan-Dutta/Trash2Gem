import React, { useState } from 'react';

    const Productcard = () => {
      const cardsData = [
        
    {
      title: 'Card 1',
      image:
        'https://images.unsplash.com/photo-1532781914607-2031eca2f00d?ixlib=rb-0.3.5&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;cs=tinysrgb&amp;w=1080&amp;fit=max&amp;ixid=eyJhcHBfaWQiOjMyMDc0fQ&amp;s=7c625ea379640da3ef2e24f20df7ce8d',
      description: 'With supporting text below as a natural lead-in to additional content.',
    },
    {
      title: 'Card 2',
      image:
        'https://images.unsplash.com/photo-1517760444937-f6397edcbbcd?ixlib=rb-0.3.5&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;cs=tinysrgb&amp;w=1080&amp;fit=max&amp;ixid=eyJhcHBfaWQiOjMyMDc0fQ&amp;s=42b2d9ae6feb9c4ff98b9133addfb698',
      description: 'With supporting text below as a natural lead-in to additional content.',
    },
    {
      title: 'Card 3',
      image:
        'https://images.unsplash.com/photo-1532712938310-34cb3982ef74?ixlib=rb-0.3.5&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;cs=tinysrgb&amp;w=1080&amp;fit=max&amp;ixid=eyJhcHBfaWQiOjMyMDc0fQ&amp;s=3d2e8a2039c06dd26db977fe6ac6186a',
      description: 'With supporting text below as a natural lead-in to additional content.',
    },
    {
      title: 'Card 4',
      image:
        'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-0.3.5&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;cs=tinysrgb&amp;w=1080&amp;fit=max&amp;ixid=eyJhcHBfaWQiOjMyMDc0fQ&amp;s=ee8417f0ea2a50d53a12665820b54e23',
      description: 'With supporting text below as a natural lead-in to additional content.',
    },
    {
      title: 'Card 5',
      image:
        'https://media.istockphoto.com/id/636379014/photo/hands-forming-a-heart-shape-with-sunset-silhouette.jpg?s=612x612&w=0&k=20&c=CgjWWGEasjgwia2VT7ufXa10azba2HXmUDe96wZG8F0=',
      description: 'With supporting text below as a natural lead-in to additional content.',
    },
    {
      title: 'Card 6',
      image:
        'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg',
      description: 'With supporting text below as a natural lead-in to additional content.',
    },
    {
      title: 'Card 7',
      image:
        'https://cdn.pixabay.com/photo/2014/02/27/16/10/flowers-276014_640.jpg',
      description: 'With supporting text below as a natural lead-in to additional content.',
    },
    {
      title: 'Card 8',
      image:
        'https://media.istockphoto.com/id/636379014/photo/hands-forming-a-heart-shape-with-sunset-silhouette.jpg?s=612x612&w=0&k=20&c=CgjWWGEasjgwia2VT7ufXa10azba2HXmUDe96wZG8F0=',
      description: 'With supporting text below as a natural lead-in to additional content.',
    },
      ];
    
      const [currentGroupIndex, setCurrentGroupIndex] = useState(0);
      const cardsPerGroup = 4;
      const totalGroups = Math.ceil(cardsData.length / cardsPerGroup);
    
      const handleNextGroup = () => {
        setCurrentGroupIndex((prevIndex) => (prevIndex + 1) % totalGroups);
      };
    
      const handlePreviousGroup = () => {
        setCurrentGroupIndex((prevIndex) => (prevIndex - 1 + totalGroups) % totalGroups);
      };
    
      const getVisibleCards = () => {
        const start = currentGroupIndex * cardsPerGroup;
        const end = Math.min(start + cardsPerGroup, cardsData.length);
        return cardsData.slice(start, end);
      };
    
      return (
        <section className="pt-5 bg pb-5">
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }} className="d-flex flex-wrap">
            <h2 style={{
              color: "#000",
              fontSize: "26px",
              fontWeight: 300,
              textAlign: "center",
              textTransform: "uppercase",
              position: "relative",
              marginBottom: "60px",
            }}><b>latest orders</b></h2>
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
            {getVisibleCards().map((card, index) => (
              <div  key={index} style={{
                width: '100%',
                maxWidth: '300px', // Limit the card width on smaller screens
                marginBottom: '20px',
                marginLeft:"15px",
                marginRight:"15px",
                border: '1px solid #ccc',
                borderRadius: '8px',
                overflow: 'hidden',
                boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
                transition: 'box-shadow 0.3s ease',
                ':hover': {
                  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
                },
              }}>
              {/* <br /> */}
                <img style={{ width: '100%', height: '200px', objectFit: 'cover' }} src={card.image} alt={card.title} />
                <div style={{ padding: '16px' }} className="card-body">
                  <h4 style={{ fontSize: '18px', fontWeight: 600, marginBottom: '8px' }} className="card-title">
                    {card.title}
                  </h4>
                  <p style={{ fontSize: '14px', color: '#555' }} className="card-text">
                    {card.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div style={{ textAlign: 'center' }}>
            <button disabled={currentGroupIndex === 0} onClick={handlePreviousGroup}><span>&#8592;</span></button>
            &nbsp;
            <button disabled={currentGroupIndex === totalGroups - 1} onClick={handleNextGroup}>
              <span>&#8594;</span>
            </button>
          </div>
        </section>
      );
    };
    
    export default Productcard;
     