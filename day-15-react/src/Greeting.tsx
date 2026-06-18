interface GreetingProps {
    name: string;
    isLearning: boolean;
}

function Greeting ({name, isLearning}: GreetingProps) {
    return (
        <div>
            <h1>Hello, I'm {name}!</h1>
            {isLearning && <p>I'm learning React today</p>}
        </div>
    );
}

export default Greeting;