/* global document, window */

class WorkspaceController {
    static elementClassesToBeToggle() {
        return [
            'whales__slogan',
            'whales__features',
            'whales__contribute',
            'whales__belugas',
            'whales__footer'
        ];
    }

    static showRestOfTheLanding() {
        this.elementClassesToBeToggle().forEach((classElement) => {
            const htmlElement = document.getElementsByClassName(classElement)[0];
            if (htmlElement) {
                htmlElement.className = classElement;
            }
        });

        return this;
    }

    static hideRestOfTheLanding() {
        this.elementClassesToBeToggle().forEach((classElement) => {
            const htmlElement = document.getElementsByClassName(classElement)[0];
            if (htmlElement) {
                htmlElement.className = `${classElement} hidden`;
            }
        });

        return this;
    }

    static showFiles(dockerfile, dockercompose) {
        const htmlFilesElement = document.getElementsByClassName('whales__files')[0];
        htmlFilesElement.className = 'whales__files';
        const htmlStarUsElement = document.getElementsByClassName('whales__star-us')[0];
        htmlStarUsElement.className = 'whales__star-us';


        const dockerfileElement = document.getElementsByClassName('whales__files__dockerfile')[0];
        dockerfileElement.innerHTML = `<a download='Dockerfile' href='data:text/plain,${dockerfile.replace(/\n/g,'\r\n')}'><i class="fa fa-cloud-download" aria-hidden="true"></i></a><pre><code class='dockerfile'>${dockerfile}</code></pre>`;
        hljs.highlightBlock(dockerfileElement);
        const dockercomposeElement = document.getElementsByClassName('whales__files__dockercompose')[0];
        dockercomposeElement.innerHTML = `<a download='docker-compose.yml' href='data:text/plain,${dockercompose.replace(/\n/g,'\r\n')}'><i class="fa fa-cloud-download" aria-hidden="true"></i></a><pre><code class='yaml'>${dockercompose}</code></pre>`;
        hljs.highlightBlock(dockercomposeElement);
        return this;
    }

    static hideFiles() {
        const htmlElement = document.getElementsByClassName('whales__files')[0];
        htmlElement.className = 'whales__files hidden';

        const htmlStarUsElement = document.getElementsByClassName('whales__star-us')[0];
        htmlStarUsElement.className = 'whales__star-us hidden';


        return this;
    }
}

