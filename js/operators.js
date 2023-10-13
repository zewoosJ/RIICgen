var str="제조사1,제조사2,제조사3,......." //쉼표로 구분
            str= str.split(',');
            for(var i=0;i<str.length;i++) document.write("<option value='" + str[i] + "'>" + str[i]);