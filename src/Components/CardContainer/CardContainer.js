import React from 'react';
import Card from './Card';

const CardContainer = () => {
  const bands = [
    { name: 'Bring Me The Horizon', band_image: 'src/assets/bmth.png', album: 'Sempiternal', song: 'Shadow Moses', songLink: 'https://www.youtube.com/watch?v=-k9qDxyxS3s', album_image: 'src/assets/BMTH_Sempiternal.png' },
    { name: 'Sleep Token', band_image: 'src/assets/sleep-token.png', album: 'Take Me Back To Eden', song: 'Take Me Back To Eden', songLink: 'https://www.youtube.com/watch?v=vFHBOKa_ZG0', album_image: 'src/assets/SleepTokenTMBTE.png' },
    { name: 'Electric Callboy', band_image: 'src/assets/ec1-wide-web.png', album: 'Everytime We Touch (TEKKNO Version)', song: 'Everytime We Touch', songLink: 'https://www.youtube.com/watch?v=AuBXeF5acqE', image: 'src/assets/ElectricCallboy_EveryTimeWeTouch_Header.png' },
    { name: 'The Browning', band_image: 'src/assets/browning.png', album: 'Geist', song: 'Carnage', songLink: 'https://www.youtube.com/watch?v=k7Fvg0zkrQo', album_image: 'src/assets/giest.png' },
    { name: 'Dayseeker', band_image: 'src/assets/dayseeker.png', album: 'Dark Sun', song: 'Neon Grave', songLink: 'https://www.youtube.com/watch?v=Mg7SUe8nOik', album_image: 'src/assets/Dayseeker-Banner.png' },
    { name: 'Bad Omens', band_image: 'src/assets/Bad_Omens.png', album: 'Death of Peace of Mind', song: 'What do you want from me?', songLink: 'https://www.youtube.com/watch?v=rFqAxnYGtRo', album_image: 'src/assets/death.png'},
    { name: 'I See Stars', band_image: 'src/assets/icy.png', album: 'New Demons', song: 'Murder Mitten', songLink: 'https://www.youtube.com/watch?v=ToG-BeGMfDk', album_image: 'src/assets/icy2.png' },
    { name: 'Amity Affliction', band_image: 'src/assets/amity.png', album: 'Let The Ocean Take Me', song: 'Pittsburgh', songLink: 'https://www.youtube.com/watch?v=vu3xGr-lNVI', album_image: 'src/assets/Let_the_Ocean_Take_Me.png'}
  ];

  return (
    <main className="main-body">
      <section className="grid-container">
        {bands.map((band, index) => (
          <Card key={index} bandName={band.name} bandImg={band.band_image} albumTitle={band.album} song={band.song} songLink={band.songLink} albImg={band.album_image} />
        ))}
      </section>
    </main>
  );
};

export default CardContainer;