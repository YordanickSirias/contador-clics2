import React from 'react';
import { StyleSheet, View, Alert, Text } from 'react-native';
import Contador from './COMPONENTES/Contador';
import Botones from './COMPONENTES/Botones';


const useContador = (initialValue = 0) => {
  const [contador, setContador] = React.useState(initialValue);

  const incrementar = () => setContador(c => c + 1);
  const reiniciar = () => setContador(initialValue);
  const disminuir = () => {
    if (contador > 0) setContador(c => c - 1);
    else Alert.alert('DENEGADO', 'No puedes disminuir por debajo de 0');
  };

  return { contador, incrementar, reiniciar, disminuir };
};

export default function App() {
  const { contador, incrementar, reiniciar, disminuir } = useContador(0);

  return (
    <View style={styles.contenedorPrincipal}>
      <View style={styles.contenedorLogo}>
        <Text style={styles.logo}>freeCodeCamp</Text>
      </View>
      <Contador valor={contador} />
      <Botones 
        onIncrementar={incrementar} 
        onReiniciar={reiniciar} 
        onDisminuir={disminuir} 
      />
    </View>
  );
}

const styles = StyleSheet.create({

  contenedor: {
    marginBottom: 10, 
  },
  contenedorPrincipal: {
    flex: 1,
    backgroundColor: '#1E2772', 
    padding: 20,
  },
  contenedorLogo: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
});