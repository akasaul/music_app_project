import { MdAdd, MdAlbum, MdCreate, MdFileUpload, MdLink, MdMic, MdMusicNote, MdSearch, MdTimer } from 'react-icons/md'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { useState } from 'react'
import { Box, Container, Flex, Image, Input, Spinner, Text } from 'theme-ui';
import SubmitButton from '../components/Buttons/SubmitButton';
import { useDispatch, useSelector } from 'react-redux';
import { reset, setQuery, searchRequest, setSearchQuery, setSong, addSongRequest, editSongReq } from '../app/features/song/songSlice';
import SearchResult from '../components/SearchResult/SearchResult';
import '../App.css';
import { auth } from '../firebase/firebase';
import LoginModal from '../components/LoginModal';


// Generic page used for both editing and adding music 

const AddSong = ({isEdit}) => {

  // Get Query parameters
  const [params] = useSearchParams();

  // Prefill from query params 
  const [formData, setFormData] = useState({
      title: !isEdit ? '' : params.get('title'),
      artist: !isEdit ? '' : params.get('artist'),
      album: !isEdit ? '' : params.get('album'),
      genre: 'pop',
      duration: !isEdit ? '' : params.get('duration'),
      imageUrl: !isEdit ? '' : params.get('imageUrl'),
  });

    const [query, setQuery] = useState('');

    const onChange = (e) => {
        setFormData({
            ...formData, 
            [e.target.name]: e.target.value
        })

    }
    
    // generic form data 
    const {title, artist, album, genre, duration, imageUrl} = formData;
    
    // States from song slice
    const { songs, isLoading, isSuccess, isError, currentState } = useSelector(state => state.song);


    const dispatch = useDispatch();

    // Search hadnler
    const handleSearch = (e) => {
      dispatch(reset());
      setQuery(e.target.value);
      dispatch(setSearchQuery(e.target.value));
      dispatch(searchRequest(query));
    }

    // General Error Object
    const [errors, setErrors] = useState({
      titleError: '' , 
      artistError: '',
      albumError: '',
      genreError: '',
      durationError: '',
      imageUrlError: ''
    });

    
    // Utitlity for setting error values 
    function setErrorVal(key, msg){

      setErrors({
        ...errors,
        [key]: msg
      })
      
    }

    const { titleError, albumError, artistError, durationError, genreError, imageUrlError } = errors;

    // Check for errors
    const validate = () => {

      // if(!title) {
      //   setErrorVal('titleError', 'Title Can\'t be Empty');
      //   throw Error('title error');
      // } else {  
      //   setErrorVal('artistError', '');
      // }

      // if(!artist) {
      //   setErrorVal('artistError', 'Artist Can\'t be Empty');
      //   throw Error('artist error');
      // } else {
      //   setErrorVal('artistError', '');
      // }

      // if(!album) {
      //   setErrorVal('albumError', 'Album Can\'t be Empty');
      //   throw Error('album error');
      // } else {
      //   setErrorVal('albumError', '');
      // }

      // if(!genre) {
      //   setErrorVal('genreError', 'Genre Can\'t be Empty');
      //   throw Error('genre error')
      // } else {
      //   setErrorVal('genreError', '');
      // }

      // if(!imageUrl) {
      //   setErrorVal('imageUrlError', 'URL Can\'t be Empty');
      //   throw Error('imageUrl error')
      // }  
      // else {
      //   setErrorVal('imageUrlError', '');
      // }

      // if(!duration) {
      //   setErrorVal('durationError', 'Duration Can\'t be Empty');
      //   throw Error('duration error');
      // }  

      // else if(isNaN(duration)) {
      //   setErrorVal('durationError', 'Duration Can only be a Number');
      //   throw Error('duration error');
      // }
      // else {
      //   setErrorVal('durationError', '');
      // }

    }

    const [openModal, setOpenModal] = useState();


    const onSubmit = (e) => {
      e.preventDefault();

      if(!auth.currentUser) {
        setOpenModal(true);
        return;
      }

      dispatch(reset());

      
      dispatch(setSong({formData, id: params.get('id')}));

      if(isEdit) {
        dispatch(editSongReq());
        return;
      }

      dispatch(addSongRequest());
    };

    const navigate = useNavigate();

    if(isSuccess && currentState === 'ADD') {
      navigate('/');  
    }

    if(isSuccess && currentState === 'EDIT') {
      navigate('/');  
    }



  return (
    <Box
      sx={{
        width: '100%'
      }}
    >
      {
        !isEdit &&
      <Container
        as='form'
      >
          <h2
            style={{
              color: 'white',
              textAlign: 'center',
              marginBlock: '1rem',
            }}
          >
              Add Songs with Search
          </h2>

          <Container
                bg='inputBg'
                p='5px'
                sx={{
                  display: 'flex',
                  maxWidth: '500px', 
                  position: 'relative',
                  borderBottom: '10px solid #1ED760'
                }}

                className='search-result'
                >

                <Input 
                  value={query} onChange={handleSearch} name='query' type='text' 
                  placeholder='Search Anything'
                  sx={{
                    color: 'white',
                    border: 'none', 
                    outline: 'none',
                  }}
                />
                <MdSearch 
                color="white"
                size={24} 
              /> 


              {

                  songs.length > 0 && query.length > 0 &&
                  <Box 
                    sx={{
                      position: 'absolute',
                      background: '#000',
                      width: '100%',
                      height: '150px',
                      overflowY: 'scroll', 
                      top: '40px',
                      left: '0px',
                      borderRadius: '4px',
                    }}
                  >
                    {
                      isLoading && !isSuccess ?
                      <Spinner
                        color='green'
                      /> :
                      songs.map(song => (
                        <SearchResult key={song?.id} title={song?.title}
                         imageUrl={song?.album?.cover_big} artist={song?.artist?.name}
                          duration={song?.duration} album={song?.album?.title} 
                          setFormData={setFormData} formData={formData}
                        />
                      ))
                    }
                  </Box>
              }
          </Container>            

      </Container>
      }

        <Container 
          as='form'
          onSubmit={onSubmit} noValidate encType='multipart'

          sx={{
            display: 'flex',
            gap: '10px',
            flexDirection: 'column',
            marginInline: 'auto',
            marginTop: '9rem'
          }}
          >

          <h2
            style={{
              color: 'white',
              textAlign: 'center',
              marginBlock: '1rem',
            }}
          >
              {
                isEdit ?
                'Edit Song': 
                'Add Song Manually' 
              }
          </h2>

          <Container
            bg='inputBg'
            p='5px'
            sx={{
              display: 'flex',
              maxWidth: '500px', 
            }}
            >
                <Input 
                  value={title} onChange={onChange} name='title' type='text' 
                  placeholder='Title'
                  sx={{
                    color: 'white',
                    border: 'none', 
                    outline: 'none',
                  }}
                />
                <MdMusicNote 
                color="white"
                size={24} 
              /> 

          </Container>            
         
          <Container
            bg='inputBg'
            p='5px'
            sx={{
              display: 'flex',
              maxWidth: '500px', 
            }}
            >
                <Input 
                  value={artist} onChange={onChange} name='artist' type='text' 
                  placeholder='Artist'
                  sx={{
                    color: 'white',
                    border: 'none', 
                    outline: 'none',
                  }}
                />
                <MdMic 
                color="white"
                size={24} 
              /> 
          </Container>     

        <Container
            bg='inputBg'
            p='5px'
            sx={{
              display: 'flex',
              maxWidth: '500px', 
            }}
            >
                <Input 
                  value={album} onChange={onChange} name='album' type='text' 
                  placeholder='Album'
                  sx={{
                    color: 'white',
                    border: 'none', 
                    outline: 'none',
                  }}
                />
                <MdAlbum 
                color="white"
                size={24} 
              /> 
        </Container>         
      
        <Container
              bg='inputBg'
              p='5px'
              sx={{
                display: 'flex',
                maxWidth: '500px', 
              }}
              >
            <select
                name='genre'
                className='input focus:border focus:border-primary'
                onChange={onChange}
                value={genre}
                style={{
                  width: '100%',
                  height: '30px',
                  background: '#323232',
                  outline: 'none',
                  border: 'none',
                  color: 'white',
                  fontSize: '18px'
                }}
            >
              <option value='Pop'>Pop</option>
              <option value='HipHop'>HipHop</option>
              <option value='R&B'>R&B</option>
              <option value='Country'> Country</option>
              <option value='Rock'>Rock</option>
              <option value='Ethiopian'>Ethiopian</option>
              <option value='Other'>Other</option>
            </select>

        </Container>      


        <Container
            bg='inputBg'
            p='5px'
            sx={{
              display: 'flex',
              maxWidth: '500px', 
            }}
            >
                <Input 
                  value={duration} onChange={onChange} name='duration' type='text' 
                  placeholder='Duration'
                  sx={{
                    color: 'white',
                    border: 'none', 
                    outline: 'none',
                  }}
                />
                <MdTimer 
                color="white"
                size={24} 
              /> 
              
        </Container>      


        <Container
            bg='inputBg'
            p='5px'
            sx={{
              display: 'flex',
              maxWidth: '500px', 
              flexDirection: 'column'
            }}
            >

            <Flex
              sx={{
                alignItems: 'center'
              }}
            >
              <Input 
                value={imageUrl} onChange={onChange} name='imageUrl' type='url' 
                placeholder='ImageUrl'
                sx={{
                  color: 'white',
                  border: 'none', 
                  outline: 'none',
                }}
              />
                <MdLink 
                color="white"
                size={24} 
              /> 
            </Flex>

            <Box>
              {
                imageUrl.length > 0 ?
                <Image
                  src={imageUrl}
                  width='100%'
                  sx={{
                    borderRadius: '5px'
                  }}
                ></Image> : null
              }
            </Box>

        </Container>      

        <Box
          sx={{
            maxWidth: '500px',
            marginInline: 'auto',
            marginBlock: '20px',  
          }}
        >
          {
            isEdit ?
            <SubmitButton>
              Edit Song
              {
                isLoading && currentState === 'EDIT' &&
                <Spinner 
                  height='20px'
                />
              }
            </SubmitButton> :

            <SubmitButton>
              Add Song
              {
                isLoading && currentState === 'ADD' &&
                <Spinner 
                  height='20px'
                />
              }
          </SubmitButton>
            

          }

        </Box>

        </Container>

        <LoginModal isOpen={openModal} setIsOpen={setOpenModal} />
    </Box>
  )
}

export default AddSong
