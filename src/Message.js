import React, {forwardRef} from 'react'
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import CardContent from '@material-ui/core/CardContent';
import './Message.css';


 const Message = forwardRef(({message, username}, ref) => {
    const isUser = username === message.username
    return (
        <div ref={ref} className={`message_card ${isUser && 'message__user'}`}>
          <Card className={isUser ? "message__userCard" : "message__guestCard"} variant="outlined">
      <CardContent>
        <Typography  color="textSecondary" gutterBottom>
        {isUser ?  `${message.message}` : `${message.username || 'Unknow User'} say:${message.message}`}
        </Typography>

      </CardContent>
     
    </Card>
     
       
        </div>
    )
})

export default Message
