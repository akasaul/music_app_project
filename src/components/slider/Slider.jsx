import { MdArrowLeft, MdArrowRight } from 'react-icons/md';
import { useSnapCarousel } from 'react-snap-carousel';
import BaseCard from '../BaseCard';

const Slider = ({songs}) => {
  const { scrollRef, pages, activePageIndex, next, prev, goTo } =
    useSnapCarousel();

    if(!songs) {
      return;
    }

  return (
    <div
      className='slider'
    >
      <ul
        ref={scrollRef}
        style={{
          display: 'flex',
          overflow: 'auto',
          scrollSnapType: 'x mandatory',
          paddingBlock: '1rem'
        }}
      >
        {Array.from({ length: 5 }).map((_, i) => (
          i < songs.length && 
          <li
            style={{
              fontSize: '50px',
              width: '250px',
              height: '250px',
              flexShrink: 0,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center'
            }}
            key={songs[i]?.id}
          >
            <BaseCard 
              imageUrl={songs[i]?.imageUrl}
              album={songs[i]?.album}
              artist={songs[i]?.artist?.name}
              duration={songs[i]?.duration}
              genre={songs[i]?.genre}
              id={songs[i]?.id}
              title={songs[i]?.title}
              key={songs[i]?.id}
            />
          </li>
        ))}
      </ul>

      {/* <div className='slider_controller'>

          <button className='slider_btn' onClick={() => prev()}>
            <MdArrowLeft />
          </button>

          <ol style={{ display: 'flex' }}>

            {pages.map((_, i) => (
              <li key={i} className='slide_marker'>
                <button
                  className='page_index'
                  style={i !== activePageIndex ? { opacity: 0.5 } : {}}
                  onClick={() => goTo(i)}
                >
                </button>
              </li>
            ))}

          </ol>


          <button className='slider_btn' onClick={() => next()}>
            <MdArrowRight />
          </button>

      </div> */}

    </div>
  );
};

export default Slider;

