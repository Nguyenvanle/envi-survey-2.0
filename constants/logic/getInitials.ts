//hàm trả về các chữ cái đầu trong tên

export function getInitials(name: string) {
  const namesArray = name.split(" ");
  let initials = "";
  namesArray.forEach((namePart) => {
    initials += namePart.charAt(0);
  });
  return initials.toUpperCase();
}
