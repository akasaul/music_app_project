import { MdAdd, MdAlbum, MdCreate, MdFileUpload, MdMic, MdMusicNote, MdSearch, MdTimer } from 'react-icons/md'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { Box, Container, Flex, Input, Text } from 'theme-ui';
import SubmitButton from '../components/Buttons/SubmitButton';
import { useDispatch, useSelector } from 'react-redux';
import { reset, setQuery, searchRequest, setSearchQuery } from '../app/features/song/songSlice';


const AddSong = () => {

    const [formData, setFormData] = useState({
        title: '',
        artist: '',
        album: '',
        genre: '',
        duration: '',
    });

    const [query, setQuery] = useState('');

    const onChange = (e) => {
        setFormData({
            ...formData, 
            [e.target.name]: e.target.value
        })

        console.log(formData);
    }
    
    const {title, artist, album, genre, duration} = formData;
    
    const { songs } = useSelector(state => state.song);

    const onSubmit = () => {};

    console.log(query);


    const dispatch = useDispatch();


    const handleSearch = (e) => {
      console.log(e.target.value);
      setQuery(e.target.value);
      dispatch(setSearchQuery(e.target.value));
      dispatch(searchRequest(query));
    }

  return (
    <Box
      sx={{
        width: '100%'
      }}
    >
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
              Add Song Automatically
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
          </Container>            

      </Container>

        <Container 
          as='form'
          onSubmit={onSubmit} noValidate encType='multipart'

          sx={{
            display: 'flex',
            gap: '10px',
            flexDirection: 'column',
            marginInline: 'auto',
            marginTop: '2rem'
          }}
          >

          <h2
            style={{
              color: 'white',
              textAlign: 'center',
              marginBlock: '1rem',
            }}
          >
              Add Song Manually
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
              <option value='pop'>Pop</option>
              <option value='rap'>Rap</option>
              <option value='r&b'>R&B</option>
              <option value='country'> Country</option>
              <option value='rock'>Rock</option>
              <option value='other'>Other</option>
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

        <Box
          sx={{
            maxWidth: '500px',
            marginInline: 'auto',
            marginBlock: '20px',  
          }}
        >
          <SubmitButton>
            Add Song
        </SubmitButton>

        </Box>

        </Container>
    </Box>
  )
}

export default AddSong
