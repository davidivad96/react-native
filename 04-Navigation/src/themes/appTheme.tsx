import { StyleSheet } from 'react-native';

export const colors = {
  primary: '#5856D6',
  white: '#FFF',
  black: '#000',
};

export const styles = StyleSheet.create({
  globalMargin: {
    marginHorizontal: 20,
  },
  title: {
    fontSize: 30,
    marginBottom: 10,
  },
  bigButton: {
    width: 100,
    height: 100,
    backgroundColor: 'red',
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10,
  },
  bigButtonColor1: {
    backgroundColor: '#5856D6',
  },
  bigButtonColor2: {
    backgroundColor: '#FF9427',
  },
  bigButtonText: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatarContainer: {
    alignItems: 'center',
    marginTop: 20,
  },
  avatar: {
    width: 150,
    height: 150,
    borderRadius: 75,
  },
  menuContainer: {
    marginVertical: 30,
    marginHorizontal: 50,
    alignItems: 'center',
  },
  menuButton: {
    marginVertical: 10,
  },
  menuText: {
    fontSize: 20,
  },
});
