/* global document, window */

class WorkspaceController {
  static elementClassesToBeToggle() {
    return [
      'whales__slogan',
      'whales__features',
      'whales__contribute',
      'whales__belugas',
      'whales__footer',
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

    const dockerfileElement = document.getElementsByClassName('whales__files__dockerfile')[0];
    dockerfileElement.innerHTML = `<pre><code class='dockerfile'>${dockerfile}</code></pre>`;

    const dockercomposeElement = document.getElementsByClassName('whales__files__dockercompose')[0];
    dockercomposeElement.innerHTML = `<pre><code class='yaml'>${dockercompose}</code></pre>`;

    return this;
  }

  static hideFiles() {
    const htmlElement = document.getElementsByClassName('whales__files')[0];
    htmlElement.className = 'whales__files hidden';

    return this;
  }
}

WorkspaceController.hideFiles().showRestOfTheLanding();
