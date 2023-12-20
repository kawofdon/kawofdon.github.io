function openPopup(text, imageUrl, linkUrl) {
  document.getElementById('popupText').innerText = text;
  document.getElementById('popupImage').src = imageUrl;
  document.getElementById('linkUrl').href = linkUrl || '#'; // Adiciona a URL do link, ou '#' se não houver link
  document.getElementById('popup').style.display = 'flex'; // Altere para flex para centralizar o conteúdo
  document.getElementById('popupImage').style.border='5px';
  document.getElementById('linkUrl').style.textDecoration="none"; 
  document.getElementById('linkUrl').style.color="white"; 
  document.getElementById('linkUrl').style.backgroundColor="#009E60";
  document.getElementById('linkUrl').style.border="2px";
  document.getElementById('linkUrl').style.padding="15px";    

  
}

function closePopup() {
  document.getElementById('popup').style.display = 'none';
  
}

function redirectToPage(url) {
  // Verifica se a URL é fornecida
  if (url) {
      // Redireciona para a URL especificada
      window.location.href = url;
  } else {
      // Se não houver URL, fecha o pop-up
      closePopup();
  }
}

