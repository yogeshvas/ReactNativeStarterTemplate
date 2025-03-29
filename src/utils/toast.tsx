import {Alert, Platform, ToastAndroid} from 'react-native';
interface ShowToast {
  (message: string): void;
}

// TODO Move this to helpers
const showToast: ShowToast = message => {
  if (Platform.OS === 'android') {
    ToastAndroid.show(message, ToastAndroid.SHORT);
  } else {
    Alert.alert('Message', message);
  }
};

export default showToast;
