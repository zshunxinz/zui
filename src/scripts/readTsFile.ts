// 示例：如何读取TypeScript文件并将其转换为文本
import * as fs from 'fs';
import * as path from 'path';

/**
 * 读取TypeScript文件并返回其文本内容
 * @param filePath TypeScript文件的路径
 * @returns 文件的文本内容
 */
function readTsFileAsText(filePath: string): string {
  try {
    // 使用fs.readFileSync同步读取文件内容
    // 'utf8'参数确保返回的是文本而不是Buffer
    const content = fs.readFileSync(filePath, 'utf8');
    return content;
  } catch (error) {
    console.error(`读取文件失败: ${filePath}`, error);
    throw error;
  }
}

/**
 * 异步读取TypeScript文件
 * @param filePath TypeScript文件的路径
 * @returns Promise，解析为文件的文本内容
 */
async function readTsFileAsTextAsync(filePath: string): Promise<string> {
  try {
    // 使用fs.promises.readFile异步读取文件内容
    const content = await fs.promises.readFile(filePath, 'utf8');
    return content;
  } catch (error) {
    console.error(`异步读取文件失败: ${filePath}`, error);
    throw error;
  }
}

// 示例用法
if (require.main === module) {
  // 同步读取示例
  try {
    const filePath = path.resolve(__dirname, '../components/index.ts');
    const content = readTsFileAsText(filePath);
    console.log('文件内容(同步读取):');
    console.log(content.substring(0, 200) + '...'); // 只显示前200个字符
  } catch (error) {
    console.error('同步读取失败', error);
  }

  // 异步读取示例
  (async () => {
    try {
      const filePath = path.resolve(__dirname, '../components/index.ts');
      const content = await readTsFileAsTextAsync(filePath);
      console.log('\n文件内容(异步读取):');
      console.log(content.substring(0, 200) + '...'); // 只显示前200个字符
    } catch (error) {
      console.error('异步读取失败', error);
    }
  })();
}