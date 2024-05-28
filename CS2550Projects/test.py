import serial
import time

def main():
    bluetooth_port = "/dev/tty.Extremis-MindReading"  # Correct port after discovery via ls /dev/tty.*
    baud_rate = 115200  # Increased baud rate for faster data transfer

    try:
        print(f"Connecting to {bluetooth_port} at {baud_rate} baud...")
        ser = serial.Serial(bluetooth_port, baud_rate, timeout=1)
        if ser.is_open:
            print("Connection established. Listening for data...")
        else:
            print("Failed to open port")
            return

        while True:
            line = ser.readline()  # Read a line of data from the serial port
            if line:
                eeg_value = line.decode('utf-8').strip()
                if eeg_value:  # Check if there is any data to print
                    print(f"EEG Value: {eeg_value}")
            else:
                time.sleep(0.01)  # Short delay to minimize CPU usage
    except serial.SerialException as e:
        print(f"Serial exception: {e}")
    except KeyboardInterrupt:
        print("Program terminated")
    finally:
        if ser.is_open:
            ser.close()
            print("Port closed")
        print("Program terminated")

if __name__ == "__main__":
    main()
