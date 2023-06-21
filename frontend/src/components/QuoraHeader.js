import React, { useState } from 'react'
import HomeIcon from '@material-ui/icons/Home';
import axios from 'axios';
import Swal from 'sweetalert2'
import AssignmentOutlinedIcon from '@mui/icons-material/AssignmentOutlined';
import EditCalendarOutlinedIcon from '@mui/icons-material/EditCalendarOutlined';
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import { Avatar, Button, Input  } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import ExpandMoreOutlinedIcon from '@mui/icons-material/ExpandMoreOutlined';
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
import './css/QuoraHeader.css'
import { signOut } from 'firebase/auth';
import { auth } from '../firebase';
import { useDispatch, useSelector } from 'react-redux';
import { login, selectUser } from '../feature/userSlice';
function QuoraHeader() {
  const [isModalOpen,setIsModalOpen]= useState(false)
  const [inputUrl,setInputUrl]= useState('');
  const [question,setQuestion] = useState('');
  const dispatch = useDispatch();
  const user = useSelector(selectUser)
  
  const Close= ()=> {<CloseIcon/>}

  const handleSubmit = async()=>{
    if(question !== ""){

      // const config = {
      //   headers:{
      //     "Content-Type": "application/json"
      //   }
      // }
      const body = {
        questionName:question,
        questionUrl:inputUrl,
        user:user
      }
await axios.post('/api/questions',body).then((res)=>{
  console.log(res.data)
  Swal.fire('congrats','Question added Successfully','success');
  window.location.href ='/';
}).catch((e)=>{
console.log(e) 
Swal.fire('Opps','Something went wrong','error')
})
    }
  }

  const handleLogout = ()=>{
    if(window.confirm('Are you sure to logout ?')){
       signOut(auth).then(()=>{
        dispatch(login())
        console.log('Loged  out ')
       }).catch(()=>{
        console.log('error in logout ')
       })
    }
   
  }
  return (
    <div className='qHeader'>
 <div className='qHeader-content'>
 <div className='qHeader__logo'>
<img src="https://video-public.canva.com/VAD8lt3jPyI/v/ec7205f25c.gif" alt="logo" /> </div>
<div className='qHeader__icons'>

<div className="qHeader__icon"><HomeIcon/></div>
<div className="qHeader__icon"><AssignmentOutlinedIcon/></div>
<div className="qHeader__icon"><EditCalendarOutlinedIcon/></div>
<div className="qHeader__icon"><PeopleAltOutlinedIcon/></div>
<div className="qHeader__icon"><NotificationsOutlinedIcon/></div>

</div>
<div className="qHeader__input">
    <SearchOutlinedIcon/>
    <input type="text" />
</div>
<div className="qHeader__Rem">
  <span onClick={handleLogout}> <Avatar src={user?.photo}/></span>
   
</div>
<button onClick={()=>setIsModalOpen(true)} className='Ques_btn' >Add Question</button>


<Modal open ={isModalOpen} styles={{
  overlay:{
    height:'auto'
  }
}} onClose={()=>setIsModalOpen(false)} closeOnEsc closeOnOverlayClick={false} center >
  <div className="modal__title">
<h5> Add Question</h5>
<h5>Share link</h5>

    </div>
    <div className="modal__info">
      <Avatar src={user?.photo} className='avatar'/>
      <div className="modal__scope">
        <PeopleAltOutlinedIcon/>
        <p>Public</p>
        <ExpandMoreOutlinedIcon/>
      </div>
    </div>
    <div className="modal__Field">
      <Input type='text' value={question} onChange={(e)=>setQuestion(e.target.value)} placeholder='Start your question with What, How, Why, etc'/>
      <div style={{display:'flex', flexDirection:'column'}}>
        <input type="text" style={{
          margin:'5px 0',
          border:'1px solid lightgray',
          padding:'10px',
          outline:'2px solid #000'
        }} value={inputUrl} onChange={(e)=>setInputUrl(e.target.value)} placeholder='optional : inclue a link that gives context '/>
        {
inputUrl !== "" &&  <img style={{height:"40vh",objectFit:'contain'}} src={inputUrl} alt="" />
        }
        
       
      </div>
    </div>
    <div className="modal__buttons">
      <button className='cancle' onClick={()=>setIsModalOpen(false)}> Cancel</button>
      <button type='submit' onClick={handleSubmit} className='add' > Add Question</button>
    </div>
     </Modal>
   
</div>
    </div>
  )
}

export default QuoraHeader