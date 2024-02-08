export default function useInput() {
  const onlyNumbers = (e: any) => {
    const charCode = e.which ? e.which : e.keyCode;

    if (charCode === 46 && e.target?.value?.length === 0) {
      e.preventDefault();
    }

    if (charCode === 46 && e.target?.value?.includes(".")) {
      e.preventDefault();
    }

    if (charCode > 31 && (charCode < 48 || charCode > 57) && charCode !== 46) {
      e.preventDefault();
    }
  };

  return {
    onlyNumbers,
  };
}
