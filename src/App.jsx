import { CORE_CONCEPTS } from './data.js';
import Header from './components/Header/Header.jsx';
import CoreConcept from './components/CoreConcept.jsx';
import TabButton from './components/TabButton.jsx';

function App() {
    function handleClick(selectedButton) {
        // selectedButton => 'components', 'jsx', 'props', 'state'
        console.log(selectedButton);
    }

    return (
        <div>
            <Header />
            <main>
                <section id="core-concepts">
                    <h2>Time to get started!</h2>
                    <ul>
                        {/* <CoreConcept
                            title={CORE_CONCEPTS[0].title}
                            description={CORE_CONCEPTS[0].description}
                            image={CORE_CONCEPTS[0].image}
                        />
                        <CoreConcept
                            title={CORE_CONCEPTS[1].title}
                            description={CORE_CONCEPTS[1].description}
                            image={CORE_CONCEPTS[1].image}
                        />
                        <CoreConcept
                            title={CORE_CONCEPTS[2].title}
                            description={CORE_CONCEPTS[2].description}
                            image={CORE_CONCEPTS[2].image}
                        />
                        <CoreConcept
                            title={CORE_CONCEPTS[3].title}
                            description={CORE_CONCEPTS[3].description}
                            image={CORE_CONCEPTS[3].image}
                        /> */}
                        <CoreConcept {...CORE_CONCEPTS[0]} />
                        <CoreConcept {...CORE_CONCEPTS[1]} />
                        <CoreConcept {...CORE_CONCEPTS[2]} />
                        <CoreConcept {...CORE_CONCEPTS[3]} />
                    </ul>
                </section>

                <section id="examples">
                    <h2>Examples</h2>
                    <menu>
                        {/* <TabButton>Components</TabButton> */}
                        <TabButton onSelect={() => handleClick('componetns')}>
                            Components
                        </TabButton>
                        <TabButton onSelect={() => handleClick('jsx')}>
                            JSX
                        </TabButton>
                        <TabButton onSelect={() => handleClick('props')}>
                            Props
                        </TabButton>
                        <TabButton onSelect={() => handleClick('state')}>
                            State
                        </TabButton>
                    </menu>
                    Dynamic Content
                </section>
            </main>
        </div>
    );
}

export default App;
