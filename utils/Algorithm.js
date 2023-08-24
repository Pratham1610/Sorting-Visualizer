const Algorithm = new Map(
  [
    ['Bubble-sort', (arr, setswap1, setswap2, setArr, setSorting) => {
      let newArr = [...arr];
      let i = 0;
      let j = i + 1;
      let animationFrameId = null;
    
      const swap = () => {
        if (i < newArr.length - 1) {
          if (j < newArr.length) {
            if (newArr[i] > newArr[j]) {
              let temp = newArr[i];
              newArr[i] = newArr[j];
              newArr[j] = temp;
    
              setswap1(i);
              setswap2(j);
            }
    
            j++;
          } else {
            i++;
            j = i + 1;
          }
        } else {
          setswap1(0);
          setswap2(0);
          setArr(newArr);
          setSorting(false);
          cancelAnimationFrame(animationFrameId);
          return;
        }

        animationFrameId = requestAnimationFrame(swap);
        setArr([...newArr]);
      };
    
      animationFrameId = requestAnimationFrame(swap);
    }]
,  

    ['Selection-sort', (arr,setswap1,setswap2,setArr,setSorting)=>{
            let newArr = [...arr];
            let i = 0;
        
            const swap = () => {
            if (i < newArr.length - 1) {
                let minIndex = i;
                for (let j = i + 1; j < newArr.length; j++) {
                  if (newArr[j] < newArr[minIndex]) {
                      minIndex = j;
                  }
                }
                if (minIndex !== i) {
                let temp = newArr[i];
                newArr[i] = newArr[minIndex];
                newArr[minIndex] = temp;
        
                setswap1(i);
                setswap2(minIndex);
                setArr([...newArr]);
                }
        
                i++;
                setTimeout(()=>{
                  requestAnimationFrame(swap);
                },120);  
            } else {
                setswap1(0);
                setswap2(0);
                setArr([...newArr]);
                setSorting(false);
            }
            };
        
            setTimeout(()=>{
              requestAnimationFrame(swap);
            },220); 

    }]
   
    ,

    ['Insertion-sort', (arr,setswap1,setswap2,setArr,setSorting)=>{
            let newArr = [...arr];
            let i = 1;
        
            const swap = () => {
            if (i < newArr.length) {
                let j = i;
                while (j > 0 && newArr[j] < newArr[j - 1]) {
                let temp = newArr[j];
                newArr[j] = newArr[j - 1];
                newArr[j - 1] = temp;
        
                setswap1(j);
                setswap2(j - 1);
                setArr([...newArr]);
        
                j--;
                }
        
                i++;
                setTimeout(()=>{
                  requestAnimationFrame(swap);
                },70); 
            } else {
                setswap1(0);
                setswap2(0);
                setArr([...newArr]);
                setSorting(false);
            }
            };
        
            setTimeout(()=>{
              requestAnimationFrame(swap);
            },120); 

    }],

    ['Merge-sort', (arr,setswap1,setswap2,setArr,setSorting)=>{
        
       const mergeSort = (arr) => {
          if (arr.length <= 1) {
            return arr;
          }
        
          const animations = [];
          const sortedArr = arr.slice();
        
          divide(sortedArr, 0, sortedArr.length - 1, animations);
        
          animateMergeSort(animations);
        
          return sortedArr;
        };
        
        const divide = (arr, start, end, animations) => {
          if (start < end) {
            const mid = Math.floor((start + end) / 2);
            divide(arr, start, mid, animations);
            divide(arr, mid + 1, end, animations);
            merge(arr, start, mid, end, animations);
          }
        };
        
        const merge = (arr, start, mid, end, animations) => {
          const leftArr = arr.slice(start, mid + 1);
          const rightArr = arr.slice(mid + 1, end + 1);
          let i = 0;
          let j = 0;
          let k = start;
        
          while (i < leftArr.length && j < rightArr.length) {
            animations.push({ type: 'compare', indices: [k, start + i, mid + 1 + j] });
        
            if (leftArr[i] <= rightArr[j]) {
              arr[k] = leftArr[i];
              animations.push({ type: 'overwrite', index: k, value: leftArr[i] });
              i++;
            } else {
              arr[k] = rightArr[j];
              animations.push({ type: 'overwrite', index: k, value: rightArr[j] });
              j++;
            }
        
            k++;
          }
        
          while (i < leftArr.length) {
            arr[k] = leftArr[i];
            animations.push({ type: 'overwrite', index: k, value: leftArr[i] });
            i++;
            k++;
          }
        
          while (j < rightArr.length) {
            arr[k] = rightArr[j];
            animations.push({ type: 'overwrite', index: k, value: rightArr[j] });
            j++;
            k++;
          }
        };
        
        const animateMergeSort = (animations) => {
          let currentAnimation = 0;
        
          const animate = () => {
            if (currentAnimation < animations.length) {
              const { type, indices, index, value } = animations[currentAnimation];
        
              if (type === 'compare') {
                const [k, i, j] = indices;
                setswap1(i);
                setswap2(j);
              } else if (type === 'overwrite') {
                setArr((arr) => {
                  const newArr = [...arr];
                  newArr[index] = value;
                  return newArr;
                });
              }
        
              currentAnimation++;
              requestAnimationFrame(animate);
            } else {
              setswap1(0);
              setswap2(0);
              setSorting(false);
            }
          };
        
          requestAnimationFrame(animate);
        };
        
        mergeSort(arr); 
          
    }],


    ['Shell-sort', (arr, setswap1, setswap2, setArr, setSorting) => {
      const shellSort = (arr) => {
        const n = arr.length;
        const animations = [];
        const sortedArr = [...arr];
    
        let gap = Math.floor(n / 2);
        while (gap > 0) {
          for (let i = gap; i < n; i++) {
            const temp = sortedArr[i];
            let j = i;
    
            while (j >= gap && sortedArr[j - gap] > temp) {
              animations.push({ type: 'compare', indices: [j - gap, j] });
    
              sortedArr[j] = sortedArr[j - gap];
              animations.push({
                type: 'swap',
                indices: [j - gap, j],
                values: [sortedArr[j], sortedArr[j - gap]],
              });
    
              j -= gap;
            }
    
            sortedArr[j] = temp;
          }
    
          gap = Math.floor(gap / 2);
        }
    
        return { sortedArr, animations };
      };
    
      const animateShellSort = (animations) => {
        const totalAnimations = animations.length;
        let currentAnimation = 0;
    
        const animate = () => {
          if (currentAnimation < totalAnimations) {
            const { type, indices, values } = animations[currentAnimation];
    
            if (type === 'compare') {
              const [i, j] = indices;
              setswap1(i);
              setswap2(j);
            } else if (type === 'swap') {
              const [i, j] = indices;
              const [value1, value2] = values;
              setArr((arr) => {
                const newArr = [...arr];
                newArr[i] = value2;
                newArr[j] = value1;
                return newArr;
              });
            }
    
            currentAnimation++;
          }
    
          if (currentAnimation < totalAnimations) {
            requestAnimationFrame(animate);
          } else {
            setswap1(0);
            setswap2(0);
            setArr(sortedArr);
            setSorting(false);
          }
        };
    
        animate();
      };
    
      const { sortedArr, animations } = shellSort(arr);
      animateShellSort(animations);
    }]
    
    
,

['Quick-sort', (arr, setswap1, setswap2, setArr, setSorting) => {
  const quickSort = async (start, end) => {
    if (start >= end) {
      setswap1(0);
      setswap2(0);
      setArr([...arr]);
      setSorting(false);
      return;
    }
    let pivotIndex = await partition(start, end);
    requestAnimationFrame(() => {
      quickSort(start, pivotIndex - 1);
      quickSort(pivotIndex + 1, end);
    });
  };

  const partition = async (start, end) => {
    const pivot = arr[end];
    let i = start - 1;

    const swapWithDelay = (i, j) => {
      return new Promise((resolve) => {
        setTimeout(() => {
          const temp = arr[i];
          arr[i] = arr[j];
          arr[j] = temp;
          setswap1(i);
          setswap2(j);
          setArr([...arr]);
          resolve();
        }, 10); // Adjust the delay time 
      });
    };

    const performPartition = async () => {
      for (let j = start; j <= end - 1; j++) {
        if (arr[j] < pivot) {
          i++;
          await swapWithDelay(i, j);
        }
      }

      await swapWithDelay(i + 1, end);
      return i + 1;
    };

    return performPartition();
  };

  quickSort(0, arr.length - 1);
  
}]
,

]);
export default Algorithm;