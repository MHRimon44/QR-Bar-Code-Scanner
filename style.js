import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F9F6EE', // Light background color
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333', // Darker color for contrast
    marginBottom: 30,
    fontFamily: 'CustomFont-Bold', // Add custom font if needed
  },
  button: {
    flexDirection: 'row',
    backgroundColor: '#1abc9c', // Stylish green button
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5, // Shadow for Android
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    marginLeft: 10, // Space between icon and text
    fontFamily: 'CustomFont-Regular', // Add custom font if needed
  },
  ScannerContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F9F6EE',
  },
  ScannerresultContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: '#ffffff',
    padding: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    alignItems: 'center',
    elevation: 5, // Shadow for Android
    shadowColor: '#000', // Shadow for iOS
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  ScannerresultText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  ScannercodeData: {
    fontSize: 16,
    color: '#333',
    marginBottom: 20,
  },
  Scannerbutton: {
    backgroundColor: '#007BFF',
    padding: 10,
    borderRadius: 5,
  },
  ScannerbuttonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  text: {
    fontSize: 16,
    color: '#333',
  },
});
export default styles;
