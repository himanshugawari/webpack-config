import Avengers from './Avengers';
import '../index.css';
import sword from '../images/sword.svg';

const App = () => {
  return (
    <>
      <main>
        <section>
          <h1>Oh Hi, React</h1>
        </section>
        <img src={sword} alt='sword' width='250' />
        <Avengers />
      </main>
    </>
  );
};

export default App;
