export const formatDate = (date: any) => {
    const newDate = new Date(date).toDateString();
    const time = new Date(date).toLocaleString([], {
      hour: "2-digit",
      minute: "2-digit",
    });
    return `${newDate}, ${time}`;
  };