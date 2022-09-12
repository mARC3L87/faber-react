import { useAppSelector } from '../../app/hooks';
import { selectData } from '../../features/dataSlice';
import './Message.scss';

const Message = () => {
  const messageData = useAppSelector(selectData).message;
  return (
    <div className={`message message-${messageData.type}`}>
      <p className='message-text'>{messageData.msg}</p>
    </div>
  );
};
export default Message;
