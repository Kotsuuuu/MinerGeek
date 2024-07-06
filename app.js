function showStory(profile) {
    const stories = {
        igor: "Igor Vinicius é um desenvolvedor front-end especializado em HTML, CSS, JavaScript e React. Ele adora criar interfaces de usuário que não apenas são funcionais, mas também visualmente atraentes. Desde jovem, Igor tinha um fascínio por tecnologia, o que o levou a seguir uma carreira em desenvolvimento web.",
        bruno: "Bruno Alves é um desenvolvedor back-end que domina Java, Python, Ruby e Node.js. Ele é conhecido por sua habilidade em resolver problemas complexos e garantir que os sistemas funcionem perfeitamente. Bruno começou sua jornada em programação ainda na universidade e, desde então, tem se destacado na área.",
        alexandre: "Alexandre é um desenvolvedor full-stack com habilidades em PHP, JavaScript, TypeScript e Python. Ele é apaixonado por todas as camadas do desenvolvimento web e adora criar soluções completas que envolvem tanto o front-end quanto o back-end. Alexandre começou sua carreira como estagiário e rapidamente se tornou um desenvolvedor chave em sua equipe.",
        ryan: "Ryan é um desenvolvedor mobile com experiência em Java, Kotlin, Swift e Dart. Ele é especialista em criar aplicativos móveis intuitivos e eficientes. Ryan sempre foi fascinado por tecnologia móvel e começou a programar apps durante o ensino médio, o que o levou a seguir essa carreira profissionalmente."
    };

    const storyDiv = document.getElementById('story');
    storyDiv.innerHTML = `<h2>${profile.charAt(0).toUpperCase() + profile.slice(1)}</h2><p>${stories[profile]}</p>`;
    storyDiv.classList.add('show-story');
}
