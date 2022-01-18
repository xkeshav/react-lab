import { connect } from 'react-redux';
import './App.css';
import { PokemonChaser } from './pages/PokemonChaser';
import './styles/index.css';


type Message = {
  sambodhan: string;
};

type OwnProps = { name: string }; // associate two types
type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export type AppProps = OwnProps & DispatchProps & StateProps;

const App = (props: AppProps) => {
  //console.log({ props });
  const { name, sambodhan } = props;
  return (
    <div className="app">
      <header>
        {sambodhan} , {name} 
      </header>
      <main ><PokemonChaser /></main>
    </div>
  );
};

const mapStateToProps = ({ sambodhan }: Message) => ({ sambodhan });

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(App);
