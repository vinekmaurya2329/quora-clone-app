import React, { useState } from 'react'
import './css/Post.css'
import { Avatar } from '@material-ui/core';
import 'react-responsive-modal/styles.css';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import ReactTimeAgo from 'react-time-ago';
import axios from 'axios';
import Swal from 'sweetalert2';
import CloseIcon from '@mui/icons-material/Close';import { Modal } from 'react-responsive-modal';
import ThumbUpAltOutlinedIcon from '@mui/icons-material/ThumbUpAltOutlined';
import ThumbDownOutlinedIcon from '@mui/icons-material/ThumbDownOutlined';
import { ChatBubbleOutlined, MoreHorizOutlined, RepeatOneOutlined, ShareOutlined } from '@material-ui/icons';
import { imageListClasses } from '@mui/material';
import ReactHtmlParser from 'html-react-parser';
import { useSelector } from 'react-redux';
import { selectUser } from '../feature/userSlice';

  function LastSeen({date}){
    return(
        <div>
             <ReactTimeAgo date={date} locale='en-US'timeStyle="round" />
        </div>

    )
};



function Post({post}) {
    const [isModalOpen,setIsModalOpen]= useState(false);
    const [answer,setAnswer] =useState('')
    const Close = ()=>{ <CloseIcon/>};
    const user = useSelector(selectUser)

    const handleQuill = (value)=>{
setAnswer(value)
    }
    


    const handleSubmit =async ()=>{
if(post?._id && answer !==""){
    const config = {
        headers:{
           "Content-Type":"application/json"
        }
    }
    const body = {
        answer:answer,
        questionId:post?._id,
        user:user,
    }
    await axios.post('/api/answers',body,config).then((res)=>{
        console.log(res.data)
        Swal.fire('Congrats','Answer added Successfully','success')
         window.location.href = '/'   
    }).catch((e)=>{
console.log(e)
    })
}

    }
  return (
    <div className='post'>
        <div className="post__info">
            <Avatar src={post?.usere?.photo}/>
            <h4>{post?.user?.userName}</h4>
            <small><LastSeen date={post?.createdAt}/></small>
        </div>
        <div className="post__question">
            <p>
               {post?.questionName} 
            </p> 
             <button onClick={()=> { console.log(post?._id); setIsModalOpen(true)}}  className='post__btnAnswer'>Answer</button>
       <Modal open={isModalOpen} closeIcon={Close} onClose={()=>setIsModalOpen(false)} closeOnEsc closeOnOverlayClick={false} styles={{overlay:{height:'auto'}}}>
<div className='modal__question'>
 <h1> {post?.questionName}  </h1>
 <p>asked by {""}<span className='name'>{post?.user?.userName}</span><span className='name'>{new Date(post?.createdAt).toLocaleString()}</span></p>
</div>
<div className="modal__answer">
    <ReactQuill value={answer} onChange={handleQuill} placeholder='Enter your answer '/>
</div>
<div className='modal__button'>
    <button className='cancle' onClick={()=>setIsModalOpen(false)} > cancel</button>
    <button className='add' onClick={handleSubmit} type='submit'>Add Answer</button>
</div>
       </Modal>
       
        </div>
        { post.questionUrl !== ""  && <img src={post.questionUrl} alt='img'/>}
       
        <div className="post__footer">
            <div className="post__footerAction">
<ThumbUpAltOutlinedIcon/>
<ThumbDownOutlinedIcon/>
            </div>
<RepeatOneOutlined/>
<ChatBubbleOutlined/>
<div className="post__footerLeft"> 
    <ShareOutlined/>
    <MoreHorizOutlined/>
</div>
        </div>
        <p style={{color:'rgba(0,0,0,0.5',fontSize:'12px',fontWeight:'bold',margin:'10px 0'}}>{post?.allAnswers.length} Answer</p>
        <div style={{margin:'5px 0px 0px 0px ',padding:"5px 0px 0px 20px",borderTop:'1px solid lightgray'}} className="post__answer">
            <div style={{display:'flex',flexDirection:'column',width:'100%',padding:'10px 5px',borderTop:'1px solid lightgray'}} className="post-answer-container">
                {
                     post?.allAnswers?.map((_a)=>(
                     <>
<div style={{display:'flex',alignItems:'center',marginBottom:'10px',fontSize:'12px',fontWeight:'600',color:'#888'}} className="post-answered">
                    <Avatar src={_a?.user?.photo} />
                    <div style={{margin:'0px 10px'}} className="post-info">
                        <p>
                            {_a?.user?.userName}
                        </p>
                        <span><LastSeen date={_a?.createdAt}/></span>
                    </div>
                </div>
                <div className="post-answer"> { ReactHtmlParser(_a?.answer) }  </div>

                     </> 
                    ))
                }
                
            </div>
        </div>
    </div>
  )
}

export default Post