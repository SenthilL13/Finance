import React, { useState } from 'react';
import {
  Container,
  Grid,
  Typography,
  Button,
  Box,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  useTheme,IconButton
} from '@mui/material';
import { styled } from '@mui/system';
import fetchdata from "./api/fetchdata";
import ChatbotIcon from './chatbot.png'; 

const HeroContainer = styled(Box)(({ theme }) => ({
  backgroundColor: '#ffffcc',
  padding: theme.spacing(12, 0),
  position: 'relative',
  overflow: 'hidden',
}));

const FloatingShape = styled(Box)(({ theme }) => ({
  position: 'absolute',
  borderRadius: '50%',
  animation: 'float 6s infinite ease-in-out',
}));

const ChatBotContainer = styled(Box)(({ theme }) => ({
  position: 'fixed',
  bottom: '20px',
  right: '20px',
  zIndex: 1000,
}));

const ChatBotBox = styled(Box)(({ theme }) => ({
  width: '400px',  // Increased width
  height: '500px', // Increased height
  border: '1px solid #ccc',
  borderRadius: '10px',
  backgroundColor: '#f9f9f9',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
  display: 'flex',
  flexDirection: 'column',
}));

const ChatBotHeader = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '10px',
  backgroundColor: '#ff5354',
  color: 'white',
  borderTopLeftRadius: '10px',
  borderTopRightRadius: '10px',
}));

const ChatBotBody = styled(Box)(({ theme }) => ({
  padding: '10px',
  height: '400px',  // Adjusted height
  overflowY: 'auto',
  display: 'flex',
  flexDirection: 'column',
  gap: '10px',
}));

const ChatBotInput = styled(TextField)(({ theme }) => ({
  marginTop: '10px',
  width: '100%',
}));

const BotMessage = styled(Box)({
  alignSelf: 'flex-start',
  backgroundColor: '#f1f1f1',
  padding: '8px',
  borderRadius: '8px',
  maxWidth: '80%',
});

const UserMessage = styled(Box)({
  alignSelf: 'flex-end',
  backgroundColor: '#0078d4',
  color: 'white',
  padding: '8px',
  borderRadius: '8px',
  maxWidth: '80%',
});

function HeroSection() {
  const [isChatBotOpen, setIsChatBotOpen] = useState(false);
  const [chatHistory, setChatHistory] = useState([]);
  const [userInput, setUserInput] = useState('');
   const [isNotepadOpen, setIsNotepadOpen] = useState(false);
  const [notes_text, setNotes] = useState('');
  const theme = useTheme();
  const userId = localStorage.getItem("user_id");

  const toggleChatBot = () => {
    setIsChatBotOpen(!isChatBotOpen);
    if (!isChatBotOpen) {
      fetchChatbotData(0);
    }
  };

   const handleSaveNotes = () => {
   const payload = {"user_id" :userId,"note":notes_text,"action":"update" };
     fetchdata.ac_notes(payload)
    .then(response => {
      
    })
    .catch(error => {
      console.error('Error fetching chat:', error);
    });
  };

   const toggleNotepad = () => {
    setIsNotepadOpen(!isNotepadOpen);
  };

  const openNotepad = ()=>{
    const payload = {"user_id" :userId,"note":notes_text,"action":"" };
     fetchdata.ac_notes(payload)
    .then(response => {
      
    })
    .catch(error => {
      console.error('Error fetching chat:', error);
    });

  }

  const fetchChatbotData = (id) => {
    const payload = { id };
    fetchdata.ac_welcome_chat(payload)
      .then(response => {
        const messages = [
          { type: "bot", text: response.message },
          ...response.Questions.map(q => ({ type: "question", id: q.id, text: q.question }))
        ];
        setChatHistory(prev => [...prev, ...messages]);
      })
      .catch(error => {
        console.error('Error fetching chat:', error);
      });
  };


const sendChat = (id) => {
  setUserInput('')
  const payload = { id };
  fetchdata.ac_send_chat(payload)
    .then(response => {
      if (response.message) {
        const message = { type: "bot", text: response.message };

        setChatHistory(prev => [...prev, message]); // Ensure it's added only once
      }
    })
    .catch(error => {
      console.error('Error fetching chat:', error);
    });
};


const fetchChatbotFollowUp = (id) => {
    const payload = { id };

    fetchdata.ac_followup_chat(payload)
      .then(response => {
        const newMessages = [];

        if (response.message && response.id !== -1) {
          newMessages.push({ type: "bot", text: response.message });
        }

        if (response.answer) {
          newMessages.push({ type: "answer", text: response.answer });
        }

        if (response.id === -1) {
          newMessages.push({ type: "exitMessage", text: response.message });
        }

        // ✅ Add clickable links if they exist
        if (response.links?.length > 0) {
          response.links.forEach(link => {
            newMessages.push({
              type: "link",
              text: link.text,
              url: link.url
            });
          });
        }

        if (response.recommended_followups?.length > 0) {
          response.recommended_followups.forEach(q => {
            newMessages.push({ type: "question", id: q.id, text: q.question });
          });
        }

        if (response.Questions?.length > 0) {
          response.Questions.forEach(q => {
            newMessages.push({ 
              type: "menu", 
              id: q.id, 
              text: q.question  
            });
          });
        }

        // ✅ Prevent duplicate messages
        setChatHistory(prev => {
          const lastMessage = prev[prev.length - 1];
          if (lastMessage && lastMessage.text === response.message) {
            return prev;
          }
          return [...prev, ...newMessages];
        });
      })
      .catch(error => {
        console.error('Error fetching follow-up:', error);
      });
};




  const fetchChatbotUserInput = (message) => {
    const payload = { message };
    fetchdata.ac_user_chat(payload)  // New endpoint for user input
      .then(response => {
        setChatHistory(prev => [...prev, { type: "bot", text: response.message }]);
      })
      .catch(error => {
        console.error('Error sending user input:', error);
      });
  };

  return (
    <HeroContainer id="home">
      <Container>
        <Grid container alignItems="center" spacing={4}>
          <Grid item xs={12} md={6}>
            <Typography variant="h2" component="h1" gutterBottom>
              Grow Your <Box component="span" color={theme.palette.secondary?.main || '#ff4081'}>Wealth</Box>,
            </Typography>
            <Typography variant="h4" gutterBottom>
              Secure Your Future - Smarter Investments
            </Typography>
            <Typography variant="h6" paragraph>
              Start your journey to financial freedom today!
            </Typography>
            {/* <Button variant="contained" color="secondary" size="large" sx={{ mr: 2 }} onClick={() => {
    toggleNotepad();
    openNotepad();
  }}>
              Make Notes
            </Button> */}
          </Grid>
          <Grid item xs={12} md={6}>
            <Box sx={{ position: 'relative' }}>
              <img
                src="https://i.ibb.co/L68y6RR/pixelcut-export-1-1.png"
                alt="Investment Illustration"
                style={{ maxWidth: '100%', height: 'auto' }}
              />
            </Box>
          </Grid>
        </Grid>
      </Container>

      {/* Notepad Modal */}
      <Dialog open={isNotepadOpen} onClose={toggleNotepad} maxWidth="sm" fullWidth>
        <DialogTitle>Notes</DialogTitle>
        <DialogContent >
          <TextField
            fullWidth
            multiline
            rows={10}
            variant="outlined"
            value={notes_text}
            onChange={(e) => setNotes(e.target.value)}
            placeholder="Write your notes here..."
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={toggleNotepad} color="secondary">
            Close
          </Button>
          <Button onClick={handleSaveNotes} variant="contained" color="secondary">
            Save
          </Button>
        </DialogActions>
      </Dialog>

      {/* ChatBot */}
      <ChatBotContainer>
        {isChatBotOpen ? (
          <ChatBotBox>
            <ChatBotHeader>
              <Typography variant="subtitle1" fontWeight="bold">ChatBot</Typography>
              <Button onClick={toggleChatBot} sx={{ color: 'white', minWidth: 'auto' }}>X</Button>
            </ChatBotHeader>
         <ChatBotBody>
{chatHistory.map((msg, index) => (
  msg.type === "bot" ? (
    <BotMessage key={index}>{msg.text}</BotMessage>
  ) : msg.type === "user" ? (
    <UserMessage key={index}>{msg.text}</UserMessage>
  ) : msg.type === "answer" ? (
    <Box key={index} sx={{ backgroundColor: '#e0f7fa', padding: '8px', borderRadius: '8px', maxWidth: '80%' }}>
      {msg.text}
    </Box>
  ) : msg.type === "exitMessage" ? (
    <Box key={index} sx={{ backgroundColor: '#bbdefb', padding: '8px', borderRadius: '8px', maxWidth: '80%' }}>
      {msg.text}
    </Box>
  ) : msg.type === "menu" ? (
    <Button 
      key={index} 
      variant="contained"
      sx={{ mt: 1, backgroundColor: msg.text === "Exit" ? "#FF2C2C" : "#C466FF", color: "white" }}
      onClick={() => fetchChatbotFollowUp(msg.id)}
    >
      {msg.text}
    </Button>
  ) : msg.type === "link" ? (  // ✅ Rendering clickable links
    <Box key={index} sx={{ mt: 1 }}>
      <a href={msg.url} target="_blank" rel="noopener noreferrer" 
         style={{ textDecoration: 'none', color: '#0078d4', fontWeight: 'bold' }}>
        {msg.text}
      </a>
    </Box>
  ) : (
    <Button 
      key={index} 
      variant="outlined"  
      sx={{ mt: 1, color: '#d81b60', borderColor: '#d81b60' }}
      onClick={() => fetchChatbotFollowUp(msg.id)}
    >
      {msg.text}
    </Button>
  )
))}

</ChatBotBody>
            <Box sx={{ display: 'flex', p: 1 }}>
              <ChatBotInput
                variant="outlined"
                placeholder="Type your message..."
                value={userInput}
                onChange={(e) => setUserInput(e.target.value)}
              />
              <Button variant="contained" color="primary" onClick={()=>sendChat()}>Send</Button>
            </Box>
          </ChatBotBox>
        ) : (
         <IconButton onClick={toggleChatBot} sx={{ position: 'fixed', bottom: 20, right: 20 }}>
           <img src={ChatbotIcon} alt="ChatBot" style={{ width: 80, height: 80 }} />
          </IconButton>        
          )}
      </ChatBotContainer>
    </HeroContainer>
  );
}

export default HeroSection;
