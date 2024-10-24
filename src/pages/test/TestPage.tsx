import avatar from './../../assets/avatar.png';
import avatarJpg from './../../assets/avatar.jpg';
import Calendar from './../../assets/calendar.svg';
import AvatarPng from './../../assets/app-image.svg';

const TestPage = () => {
  return (
    <div>
      <img width={100} height={100} src={avatar} />
      <img width={100} height={100} src={avatarJpg} />
      <div>
        <Calendar width={50} height={50} fill={'red'} />
        <AvatarPng color={'green'} width={50} height={50} />
      </div>
      test page
    </div>
  );
};

export default TestPage;
