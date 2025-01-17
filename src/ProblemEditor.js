import {withRouter} from "react-router";
import './ProblemEditor.css';
import TagList from "./tagsComponents/TagList";
import SubmittedCodeList from './submittedCodeComponents/SubmittedCodeList';
import ProvidedCodeList from './providedCodeComponents/ProvidedCodeList';
import ResourceSpec from "./resourceSpecComponents/ResourceSpec";
import CompilationScript from "./CompilationScript/CompilationScript";

const ProblemEditor = withRouter(({history}) =>  {
    return (
        <div className="columns problem-editor">
            <div className="column">
                <h1>Problem Name</h1>
                <section>
                    <TagList />
                </section>
                <section>
                    <ProvidedCodeList />
                </section>
                <section>
                    <SubmittedCodeList />
                </section>
                <section>
                    <ResourceSpec />
                </section>
                <section>
                    <CompilationScript />
                </section>



            </div>
            <div className="column">
            </div>
        </div>
    );
});

export {ProblemEditor};