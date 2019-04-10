import socket
import config

def prompt():
    print('> ', end='')
    return input()

def status(txt):
    print()
    print(txt)
    print()

def main():
    with socket.socket(socket.AF_INET, socket.SOCK_STREAM) as s:
        s.connect((config.SERVER_HOST, config.SERVER_PORT))
        while True:
            tag = bytes(prompt(), 'utf-8')
            s.sendall(tag)

if __name__ == '__main__': 
    try: main()
    except KeyboardInterrupt:
        print('KeyboardInterrupt detected exiting...')
