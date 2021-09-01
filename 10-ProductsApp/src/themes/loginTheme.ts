import { StyleSheet } from 'react-native';

export const loginTheme = StyleSheet.create({
  formContainer: {
    flex: 1,
    paddingHorizontal: 30,
    justifyContent: 'center',
    height: 600,
    paddingBottom: 50,
  },
  title: {
    color: '#FFF',
    fontSize: 30,
    fontWeight: 'bold',
    marginTop: 20,
  },
  label: {
    marginTop: 25,
    color: '#FFF',
    fontWeight: 'bold',
  },
  inputField: {
    color: '#FFF',
    fontSize: 20,
  },
  inputFieldIOS: {
    borderBottomColor: '#FFF',
    borderBottomWidth: 2,
    paddingBottom: 5,
  },
  buttonContainer: {
    alignItems: 'center',
    marginTop: 50,
  },
  button: {
    borderWidth: 2,
    borderColor: '#FFF',
    paddingHorizontal: 20,
    paddingVertical: 5,
    borderRadius: 5,
  },
  buttonText: {
    fontSize: 18,
    color: '#FFF',
  },
  newUserContainer: {
    alignItems: 'flex-end',
    marginTop: 20,
  },
});
