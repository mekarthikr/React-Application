// import logo from './logo.svg';
import './App.css';

function App() {
function getName()
{
  return user.firstName+" "+user.lastName;
}

const user={
  firstName:"The Big",
  lastName:"Bang Theory"
}
const head=(
  <div>
    {getName()}
  </div>
);
return head;
}

function App2()
{
  const style_img=
  {
    margin:"auto",
    width: "10%",
    paddingLeft:"45%",
    paddingRight:"45%"
  }
  const style_h3={
    textAlign:"center"
  }
  const img_link="https://images-na.ssl-images-amazon.com/images/M/MV5BMjEzMDAxOTUyMV5BMl5BanBnXkFtZTgwNzAxMzYzOTE@._V1_.jpg"
  const title="Stranger Things";
  const home_page=
  <div>
    <h3 style={style_h3}>{title}</h3>
    <img style={style_img} src={img_link}></img>
    <p>In 1980s Indiana, a group of young friends witness supernatural forces and secret government exploits. As they search for answers, the children unravel a series of extraordinary mysteries.
</p>
  </div>
  return home_page;
}

export {App,App2} ;

