// ==UserScript==
// @name         123 云盘会员青春版
// @author       hmjz100、Qing
// @namespace    github.com/hmjz100
// @version      1.0.3
// @description  《也许同类型中最好用？》系列 - 显示 123 云盘身份信息为会员，支持超过 1GB 上限下载文件（基于【123云盘下载辅助】修改），支持使用视频倍速、关闭广告、修改头像、修改用户名等功能，自定义程度超高！需要修改头部代码来配置显示内容（非常简单！）
// @icon         data:image/x-icon;base64,AAABAAEAQEAAAAEAIAAoQgAAFgAAACgAAABAAAAAgAAAAAEAIAAAAAAAAEAAAMMOAADDDgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAPt8WAD7fFgC+3xYB/t8WBf7fFhQ+3xYkPt8WMD7fFji+3xY9Px9Wfr8fVn7+3xY+/x9Wfv7fFj7/H1Z+/t8WPv8fVn7/H1Z+/x9Wfv8fVn7/H1Z+/x9Wfv7fVn7+31Z+/t9Wfv7fVn7/H1Z+/x9Wfv8fVn7+3xY+/x9Wfv7fFj7/H1Z+/x9Wfv8fVn7/H1Z+/x9Wfv8fVn7/H1Z+/x9Wfr7fFj1+3xY5Pt8WMP7fFiU+3xYVPt8WBn7fFgI+3xYAvt8WAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA+3xYAPt8WAD7fFgF+3xYJft8WIL7fFjV/H1Z8ft9Wff8fVn6+31Z/ft9Wf78fVn//H1Z//x9Wf/8fVn//H1Z//t9Wf/8fVn/+31Z//x9Wf/8fVn//H1Z//t9Wf/7fVn/+31Y//t9Wf/7fVn/+31Z//x9WP/8fVn/+31Z//x9Wf/7fVn//H1Z//t9Wf/8fVn/+31Z//x9Wf/8fVn//H1Z//t9Wf/8fVn/+31Z/vt9Wf38fVn7/H1Z9/x9WfL7fFjZ+3xYift8WCr7fFgG+3xYAft8WAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA+3xYAPt8WAH7fFgQ+3xYc/t8WNn8fVn1/H1Z/fx9Wf/8fVn//H1Z//x9Wf/8fVn//H1Z//x9Wf/8fVn//H1Z//x9Wf/8fVn//H1Z//x9Wf/8fVn//H1Z//x9Wf/8fVn//H1Z//x9Wf/8fVn//H1Z//x9Wf/8fVn//H1Z//x9Wf/8fVn//H1Z//x9Wf/8fVn//H1Z//x9Wf/8fVn//H1Z//x9Wf/8fVn//H1Z//x9Wf/8fVn//H1Z//x9Wf/8fVn//H1Z/fx9Wfb7fFjd+3xYfPt8WBP7fFgC+3xYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA+3xYAPt8WAL7fFgm+3xYrvt9We/7fVn9+31Z//t8Wf/7fFj/+3xY//t9Wf/7fVn/+31Z//t9Wf/7fFj/+3xY//t8Wf/7fVn/+31Z//t9Wf/7fFj/+3xY//t8Wf/7fVn/+31Z//t9Wf/7fVj/+3xY//t8WP/7fFj/+31Y//t9Wf/7fVn/+31Z//t8Wf/7fFj/+3xY//t9Wf/7fVn/+31Z//t8Wf/7fFj/+3xY//t9Wf/7fVn/+31Z//t9Wf/7fFj/+3xY//t8Wf/7fVn/+31Z/vt9WfD7fFi2+3xYLft8WAP7fFgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA+3xYAPt8WAL7fFgx+3xYxvt9Wff7fFj/+3xY//t8WP/7fVn/+3xY//t8WP/7fVj/+31Z//t9Wf/7fVj/+3xY//t8WP/7fVn/+3xY//t8WP/7fFj/+31Z//t9WP/7fFj/+3xY//t8WP/7fVj/+31Y//t8WP/7fFj/+3xY//t9WP/7fFj/+3xY//t8WP/7fVj/+31Y//t9Wf/7fFj/+3xY//t8WP/7fVn/+3xY//t8WP/7fVj/+31Z//t9Wf/7fVj/+3xY//t8WP/7fVn/+3xY//t8WP/7fFj/+31Z+ft8WMz7fFg5+3xYA/t8WAAAAAAAAAAAAAAAAAAAAAAA+3xYAPt8WAH7fFgp+3xYxvx9WPn8fVj//H1Y//x9Wf/8fVj//H1Y//x9WP/8fVn//H1Y//x9WP/8fVj//H1Z//x9WP/8fVj//H1Y//x9Wf/8fVj//H1Y//x9WP/8fVn//H1Y//x9WP/8fVj//H1Z//x9WP/8fVj//H1Y//x9WP/8fVn//H1Y//x9WP/8fVj//H1Z//x9WP/8fVj//H1Y//x9Wf/8fVj//H1Y//x9WP/8fVn//H1Y//x9WP/8fVj//H1Z//x9WP/8fVj//H1Y//x9Wf/8fVj//H1Y//x9WP/8fVn7+3xYzft8WDH7fFgC+3xYAAAAAAAAAAAAAAAAAPt8WAH7fFgT+3xYtfx9Wfj7fVj//H1Z//x9Wf/8fVn//H1Z//x9Wf/8fVn//H1Z//t9WP/8fVn//H1Z//t9Wf/8fVn//H1Z//x9Wf/8fVn/+31Y//x9Wf/8fVn//H1Z//x9Wf/7fVn//H1Z//x9Wf/8fVn//H1Z//x9Wf/8fVn//H1Z//x9Wf/8fVn/+31Z//x9Wf/7fVj//H1Z//x9Wf/8fVn//H1Z//x9Wf/8fVn//H1Z//t9WP/8fVn//H1Z//t9Wf/8fVn//H1Z//x9Wf/8fVn/+31Y//x9Wf/8fVn//H1Z//x9Wfn7fFi++3xYGft8WAEAAAAAAAAAAPt8WAD7fFgG+3xYgfx9WfD8fVn//H1Z//x9Wf/8fVn//H1Z//x9Wf/8fVn//H1Z//x9Wf/8fVn//H1Z//x9Wf/8fVn//H1Z//x9Wf/8fVn//H1Z//x9Wf/8fVn//H1Z//x9Wf/8fVn//H1Z//x9Wf/8fVn//H1Z//x9Wf/8fVn//H1Z//x9Wf/8fVn//H1Z//x9Wf/8fVn//H1Z//x9Wf/8fVn//H1Z//x9Wf/8fVn//H1Z//x9Wf/8fVn//H1Z//x9Wf/8fVn//H1Z//x9Wf/8fVn//H1Z//x9Wf/8fVn//H1Z//x9Wf/8fVn//H1Z8/t8WI/7fFgG+3xYAAAAAAD7fFgC+3xYMft8WOD8fFn+/HxZ//x8Wf/8fVn//H1Z//x9Wf/8fVn//H1Z//x9Wf/8fVn//H1Z//x9Wf/8fVn//H1Z//x9Wf/8fVn//H1Z//x9Wf/8fVn//H1Z//x9Wf/8fFn//HxZ//x8Wf/8fVn//H1Z//x9Wf/8fVn//H1Z//x9Wf/8fVn//H1Z//x9Wf/8fFn//HxZ//x8Wf/8fVn//H1Z//x9Wf/8fVn//H1Z//x9Wf/8fVn//H1Z//x9Wf/8fVn//H1Z//x9Wf/8fVn//H1Z//x9Wf/8fVn//H1Z//x9Wf/8fFn//HxZ//x8Wf77fFjk+3xYPPt8WAMAAAAA+3xYB/t8WJb7fFj3+3xY//t8WP/7fFj/+3xY//t8Wf/7fFj/+3xY//t8WP/7fFj/+3xZ//t8WP/7fFn/+3xZ//t8Wf/7fFn/+3xY//t8WP/7fFj/+3xY//t8Wf/7fFj/+3xY//t8WP/7fFj/+3xY//t8WP/7fFj/+3xY//t8WP/7fFj/+3xY//t8WP/7fFj/+3xY//t8WP/7fFj/+3xY//t8Wf/7fFj/+3xY//t8WP/7fFj/+3xZ//t8WP/7fFn/+3xZ//t8Wf/7fFn/+3xY//t8WP/7fFj/+3xY//t8Wf/7fFj/+3xY//t8WP/7fFj/+3xY+Pt8WKT7fFgI+3xYAft8WCL7fFjg/HxY/vx8WP/8fFj//HxY//x8WP/8fFj//HxY//x8WP/8fFj//HxY//x8WP/8fFj//HxY//x8WP/8fFj//HxY//x8WP/8fFj//HxY//x8WP/8fFj//HxY//x8WP/8fFj//HxY//x8WP/8fFj//HxY//x8WP/8fFj//HxY//x8WP/8fFj//HxY//x8WP/8fFj//HxY//x8WP/8fFj//HxY//x8WP/8fFj//HxY//x8WP/8fFj//HxY//x8WP/8fFj//HxY//x8WP/8fFj//HxY//x8WP/8fFj//HxY//x8WP/8fFj//HxY//x8WP77fFnm+3xYLft8WAX7fFhj/HxY8/x8Wf/7fFj/+3xY//x8Wf/7fFj/+3xZ//x8WP/8fFj/+3xZ//x8Wf/8fFj//HxZ//x8Wf/8fFn//HxZ//x8WP/8fFn/+3xZ//x8WP/8fFn/+3xZ//t8WP/8fFj//HxY//t8WP/8fFj//HxY//x8WP/8fFj//HxZ//x8WP/8fFj//HxY//x8WP/7fFj//HxY//x8Wf/7fFj/+3xZ//x8WP/8fFj/+3xZ//x8Wf/8fFj//HxZ//x8Wf/8fFn//HxZ//x8WP/8fFn/+3xZ//x8WP/8fFn/+3xZ//t8WP/8fFj/+3xY//t8WP/8fFn//HxY9Pt8WHL7fFgJ+3xYovt8Wfn8fFn//HxZ//t8Wf/8fFn/+3xY//x8Wf/8fVn/+3xY//x8Wf/8fFn//H1Z//x8Wf/7fFn/+3xZ//t8Wf/7fFn//HxZ//x8Wf/7fFj//HxZ//x8Wf/7fFj//H1Y//x8Wf/8fFn//HxZ//x8Wf/8fFn//HxZ//x8Wf/8fFn/+3xZ//x8Wf/8fFn/+3xZ//t8Wf/8fFn/+3xY//x8Wf/8fVn/+3xY//x8Wf/8fFn//H1Z//x8Wf/7fFn/+3xZ//t8Wf/7fFn//HxZ//x8Wf/7fFj//HxZ//x8Wf/7fFj//H1Z//x8Wf/8fFn//HxZ//x9Wfr7fFix+3xYDPt8WND7fVj9+31Z//t9WP/7fVn/+31Y//t9WP/7fVj/+31Y//t9WP/7fVj/+31Y//t9WP/7fVn/+31Y//t9WP/7fVj/+31Y//t9WP/7fVn/+31Y//t9WP/7fVn/+31Y//t9WP/7fVj/+31Y//t9Wf/7fVn/+31Z//t9Wf/7fVn/+31Y//t9WP/7fVn/+31Z//t9Wf/7fVn/+31Y//t9WP/7fVj/+31Y//t9WP/7fVj/+31Y//t9WP/7fVn/+31Y//t9WP/7fVj/+31Y//t9WP/7fVn/+31Y//t9WP/7fVn/+31Y//t9WP/7fVj/+31Y//t9Wf/7fVn++3xY3Pt8WBn7fFjo/H1Z//x9Wf/8fVn//H1Z//x9Wf/8fVn//H1Z//x9Wf/8fVn//H1Z//x9Wf/8fVn//H1Z//x9Wf/8fVn//H1Z//x9Wf/8fVn//H1Z//x9Wf/8fVn//H1Z//x9Wf/8fVn//H1Z//x9Wf/8fVn//H1Z//x9Wf/8fVn//H1Z//x9Wf/8fVn//H1Z//x9Wf/8fVn//H1Z//x9Wf/8fVn//H1Z//x9Wf/8fVn//H1Z//x9Wf/8fVn//H1Z//x9Wf/8fVn//H1Z//x9Wf/8fVn//H1Z//x9Wf/8fVn//H1Z//x9Wf/8fVn//H1Z//x9Wf/8fVn//H1Z//x9WO37fFgm+3xY7/t8WP/7fFj/+3xY//t8WP/7fFj/+3xY//t8WP/7fFj/+3xY//t8WP/7fFj/+3xY//t8WP/7fFj/+3xY//t8WP/7fFj/+3xY//t8WP/7fFj/+3xY//t8WP/7fFj/+3xY//t8WP/7fFj/+3xY//t8WP/7fFj/+3xY//t8WP/7fFj/+3xY//t8WP/7fFj/+3xY//t8WP/7fFj/+3xY//t8WP/7fFj/+3xY//t8WP/7fFj/+3xY//t8WP/7fFj/+3xY//t8WP/7fFj/+3xY//t8WP/7fFj/+3xY//t8WP/7fFj/+3xY//t8WP/7fFj/+3xY//t8WP/7fFjw+3xYLPx8WPD8fVn//H1Z//x9Wf/8fVj++3xZw/t8WK77fFit+3xYrft8WK37fFis/HxY2Px8WPr8fFj/+3xY3/t8WLb7fFis+3xYrft8WK37fFit+3xYrft8WK37fFit+3xYrft8WK37fFit+3xYrft8WK37fFit+3xYrft8WK37fFit+3xYrft8WKv7fFjC/HxY7/x9WP/8fFj//HxY5/t8WLb7fFis+3xYrft8WK37fFit+3xYrft8WK37fFit+3xYr/t8WLP7fFi8+3xYzPt8WOf7fFj//HxY//x8WP/8fVj//H1Y//x8WP/8fVj//H1Z//x9Wf/8fVn//HxY8ft8WCz7fVjw/H1Y//t9WP/7fVj//H1Y/Pt8WV77fFgn+3xYI/t8WCP7fFgj+3xYIvx9WZb8fVjx+31Y//t8WKn7fFg7+3xYIft8WCP7fFgj+3xYI/t8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Wf/7fVn/+3xZ//t8Wf/7fFn/+3xZ//t8Wf/7fFn/+3xZ//t8Wf/7fFn/+3xZ//t8Wf/7fFn/+3xZ//t8Wf/7fFn/+31Z//t9Wf/7fFn/+3xZ//t8Wf/7fFn/+3xZ//t8Wf/7fFn/+3xZ//t8Wf/7fFnk+3xYXvt8WAAAAAAAAAAAAPt8WAD7fFgD+3xYOft8Wfv7fFn/+3xZ//t8Wf/7fFnx+3xYLPx8WfD8fFn//HxZ//x8Wf/8fVn7+3xZRPt8WQX7fFkAAAAAAAAAAAD8fFkA/HxZhfx9We/8fFn/+3xYoft8WB77fFgAAAAAAAAAAAD7fFgA+3xYSft8WdP8fFn//HxZ//x9Wf/8fVn//HxZ//x8Wf/8fFn//HxZ//x8Wf/8fFn//HxZ//x8Wf/8fFn//HxZ//x8Wf/8fVn//H1Z//x8Wf/8fFn//HxZ//x8Wf/8fFn//HxZ//x8Wf/8fFn//HxZ//x8Wf/8fFn//H1Z6vt8WHX7fFgAAAAAAAAAAAD7fFgA+3xYBft8WEL8fVn7/HxZ//x8Wf/8fFn//HxZ8ft8WCz7fFjw+3xY//t8WP/7fFj/+3xY+/t8WUT7fFkF+3xZAAAAAAAAAAAA/H1YAPx9WIX8fFjv+3xY//t8WLD7fFgj+3xYAAAAAAAAAAAA+3xYAPt8WCf7fFjB+3xY//t8WP/7fFj/+3xY//t8WP/7fFj/+3xY//t8WP/7fFj/+3xY//t8WP/7fFj/+3xY//t8WP/7fFj/+3xY//t8WP/7fFj/+3xY//t8WP/7fFj/+3xY//t8WP/7fFj/+3xY//t8WP/7fFj/+3xY//t8WOD7fFhL+3xYAAAAAAAAAAAA+3xYAPt8WAn7fFhi+3xY/Pt8WP/7fFj/+3xY//t8WPH7fFgs+3xY8Pt8Wf/7fFn/+3xY//t8WPv7fFlE+3xZBft8WQAAAAAAAAAAAPx9WQD8fVmF+3xZ7/t8Wf/7fFjM+3xYLPt8WAAAAAAAAAAAAPt8WAD7fFgF+3xYd/t8WOf7fFj/+3xZ//t8WP/7fFj/+3xY//t8Wf/7fFj/+3xY//t8WP/7fFj/+3xY//t8Wf/7fFj/+3xY//t8WP/7fFn/+3xZ//t8WP/7fFj/+3xY//t8WP/7fFn/+3xZ//t8WP/7fFj/+3xY//t8WOn7fFiG+3xYEft8WAAAAAAAAAAAAPt8WAD7fFgT+3xYoft8WP37fFj/+3xZ//t8Wf/7fFjx+3xYLPx8WPD8fFj//HxY//x8WP/8fFj7+3xYRPt8WAX7fFgAAAAAAAAAAAD7fFgA+3xYhfx8WO/8fFj/+3xY8Pt8WD/7fFgA+3xYAAAAAAAAAAAA+3xYAPt8WBv7fFhn+3xYnPt8Waf7fFmn+3xYp/t8WKr7fFm1+3xYy/t8WO37fFj//HxY//x8WP/8fFj//HxY//x8WP/8fFj//HxY//x8WP/7fFj++3xY6ft8WMb7fFjI+3xZyPt8Wcj7fFjC+3xYsvt8WJL7fFhc+3xYG/t8WAAAAAAAAAAAAPt8WAD7fFgE+3xYOft8WOT8fFj+/HxY//x8WP/8fFj//HxY8ft8WCz7fFnw/HxZ//x8Wf/7fFn//HxZ+/t8WUT7fFkF+3xZAAAAAAAAAAAA+3xZAPt8WYX8fFnv/HxZ//x8Wf/7fFhy+3xYDvt8WAAAAAAAAAAAAAAAAAD7fFgA+3xYB/t8WBr7fVkl+31ZJft9WSX7fFgn+3xYMPt8WEL7fFhg+3xYlPx8WNz8fFj//HxZ//t8Wf/8fFn//HxZ//x8Wf/8fVn//HxZ/ft8WLP7fFg6+3xYQPt8WED7fFg/+3xYO/t8WC37fFgV+3xYAAAAAAAAAAAAAAAAAPt8WAD7fFYA+3xZHPt8Wab7fFn+/H1Z//t8Wf/8fFn//HxZ//t8WfH7fFgs/H1Z8Px9Wf/8fVn//H1Z//x9Wfv7fFlE+3xYBft8WAAAAAAAAAAAAPx9WQD8fVmF/H1Z7/x8Wf/8fVn/+3xYyft8WDD7fFgA+3xYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA+3xYAPt8WBX7fFhc+3xYxPx8Wf/7fVn//H1Z//x9Wf/8fVn//H1Z//x9Wf37fFma/H1ZAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAPt8WAD7fFgC+3xYJPt8WJD8fVn2/H1Z//x9Wf/8fVn//H1Z//x9Wf/8fVnx+3xYLPx9WfD8fVn//H1Z//x9Wf/8fVn7+3xYRPt8WQX7fFkAAAAAAAAAAAD8fFgA/HxYhfx9We/8fVn//H1Z//x9Wf37fFiQ+3xYGvt8WAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD7fFgA+3xYA/t8WFH7fFjQ/H1Z//x9Wf/8fVn//H1Z//x9WP/8fVn9/H1Zmvx9WQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD7fFgA+3xYC/t8WGf7fFj3/H1Z//x9Wf/8fVn//H1Z//x9Wf/8fVn//H1Z8ft8WCz8fVnw/H1Z//x9Wf/8fVn//H1Z+/t8WET7fFkF+3xZAAAAAAAAAAAA/HxYAPx8WIX8fVnv/H1Z//x9Wf/8fVn/+3xY7vt8WIz7fFgs+3xYBft8WAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAPt8WAD7fFgK+3xYe/t8WPj8fVn//H1Z//x9Wf/8fFj//H1Z/fx9WZr8fVkAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA+3xYAPt8WAj7fFhG+3xYr/x9WP78fVn//H1Z//x9Wf/8fVn//H1Z//x9WfH7fFgs+3xY8Pt8WP/7fFj/+3xY//t8Wfv7fFhE+3xYBft8WAAAAAAAAAAAAPt9WQD8fVmF+3xZ7/t8WP/7fFj/+3xZ//t8WP/7fFjz+3xYs/t8WHX7fFhS+3xYQPx8WDn8fFg3+3xYN/t8WDT7fFgi+3xYCft8WAAAAAAAAAAAAAAAAAAAAAAA+3xYAPt8WEH7fFjK+3xZ//t8Wf/7fFn/+3xZ//t8Wf37fFin+3xYGvt8WCH7fFgh+3xYIft8WB37fFgR+3xYAft8WAAAAAAAAAAAAAAAAAD7fFgA+3xYBPt8WDL7fFjA+3xZ/vt8Wf/7fFn/+3xY//t8WP/7fFjx+3xYLPt8WPD7fFj/+3xY//t8WP/7fFj7+3xZRPt8WQX7fFkAAAAAAAAAAAD7fVgA+31Yhft9WO/7fFj/+3xY//t8WP/7fFj/+3xY//t8WP/8fFj3/H1Y3fx9WMj8fVi//H1Yvfx9WL38fFi5/HxYp/t8WHf7fFgp+3xYAPt8WAAAAAAAAAAAAPt8WAD7fFgZ+3xYmPt8WP/8fFj/+3xY//t8WP/7fFj+/H1Y2/x9WKH8fVik/H1YpPx9WKT8fVif/H1Ykvt8WHb7fFhI+3xYD/t8WAAAAAAAAAAAAPt8WAD7fFgH+3xYT/t8WO/7fFj/+3xY//t8WP/7fFj/+3xY8ft8WCz8fVjw/H1Y//x9WP/8fVj//H1Y+/t8WET7fFkF+3xZAAAAAAAAAAAA/H1ZAPx9WYX8fVnv/H1Y//x9WP/8fVj//H1Y//x9WP/8fVj//H1Y//x9WP/8fVj//H1Y//x9WP/8fVj//H1Y//x9WP/7fVj2+3xYkft8WB37fFgAAAAAAAAAAAD7fFgA+ntXAvt8WHn7fFj//H1Y//x9WP/8fVj//H1Y//x9WP/8fVj//H1Y//x9WP/8fVj//H1Y//t9WP/7fFj6+3xY0/t8WHT7fFgM+3xYAAAAAAAAAAAA+3xYAPt8WBb7fFi1/HxY/fx9WP/8fVj//H1Y//x9WPH7fFgs+31Z8Pt9Wf/7fVn/+31Z//t9Wfv7fFlE+3xYBft8WAAAAAAAAAAAAPx9WQD8fVmF+31Z7/t9Wf/7fVn/+31Z//t9Wf/7fVn/+31Z//t9Wf/7fVn/+31Z//t9Wf/7fVn/+31Z//t9Wf/7fVn/+31Z//t9Wdn7fFhO+3xYAAAAAAAAAAAA+XpWAPt8WAD7fFhp+3xY//t9Wf/7fVn/+31Z//t9Wf/7fVn/+31Z//t9Wf/7fVn/+31Z//t9Wf/7fVn/+31Z//t9Wf/7fFjd+3xYQPt8WAAAAAAAAAAAAPt8WAD7fFgL+3xYcPt9Wfz7fVn/+31Z//t9Wf/7fVnx+3xYLPx9WfD8fVj//H1Z//x9Wf/8fVn7+3xZRPt8WQX7fFkAAAAAAAAAAAD7fFgA+3xYhfx9WO/8fVn//H1Z//x9Wf/8fVn//H1Z//x9WP/8fVj//H1Z//x9Wf/8fVn//H1Y//x9Wf/8fVn//H1Z//x9Wf/8fVno+3xYXPt8WAAAAAAAAAAAAAAAAAD7fFgA+3xYZPt8WPr8fVn//H1Z//x9WP/8fVn//H1Z//x9Wf/8fVn//H1Z//x9Wf/8fVn//H1Z//x9Wf/8fVn//H1Y6Pt8WGz7fFgAAAAAAAAAAAD7fFgA+3xYBvt8WEv8fVn7/H1Z//x9Wf/8fVj//H1Z8ft8WCz8fVnw/H1Z//x9Wf/8fVn//H1Z+/t8WET7fFgF+3xYAAAAAAAAAAAA/HxZAPx8WYX8fVnv/H1Z//x9Wf/8fVn//H1Z//x9Wf/8fVn//H1Z//x9Wf/8fVn//H1Z//x9Wf/8fVn//H1Z//x9Wf/8fVn/+3xY0Pt8WEf7fFgAAAAAAAAAAAD7fFgA+3xYAPt8WGj7fFj+/H1Z//x9Wf/8fVn//H1Z//x9Wf/8fVn//H1Z//x9Wf/8fVn//H1Z//x9Wf/8fVn//H1Z//x9WeL7fFhU+3xYAAAAAAAAAAAA+3xYAPt8WAT7fFhB/H1Z+/x9Wf/8fVn//H1Z//x9WfH7fFgs+31Y8Pt8WP/7fFj/+3xY//t8WPv7fFhE+3xYBft8WAAAAAAAAAAAAPx9WAD8fViF+3xY7/t8WP/7fFj/+3xY//t9WP/7fVj/+3xY//t8WP/7fVj/+31Y//t9WP/7fVj/+3xY//t8WP/7fFj/+3xY7vt8WIX7fFgZ+3xYAAAAAAAAAAAA+3xYAPp7WAP7fFh6+3xY//t8WP/7fFj/+31Y//t9WP/7fVj/+3xY//t8WP/7fFj/+3xY//t8WP/7fFj/+3xY//t8WPf7fFit+3xYG/t8WAAAAAAAAAAAAPt8WAD7fFgH+3xYVPt8WPv7fFj/+3xY//t9WP/7fFjx+3xYLPx9WPD8fVj//H1Y//x9WP/8fVj7+3xYRPt8WAX7fFgAAAAAAAAAAAD7fFgA+3xYhfx9WO/8fVj//H1Y+/x9WMz8fVi8/H1Yvfx9WL38fVi9/H1Yvfx9WL38fVi9/H1Yvfx9WL38fVi6+3xYrft8WHj7fFgj+3xYAAAAAAAAAAAAAAAAAPt8WAD7fFgc/HxYnPx9WP/8fVj//H1Y7Px9WMX8fVi9/H1Yvfx9WL38fVi9/H1Yvfx9WL38fVi9/H1YvPx9WLX7fFiT+3xYOvt8WAAAAAAAAAAAAAAAAAD7fFgA+3xYDvt8WIP8fVj8/H1Y//x9WP/8fVj//H1Y8ft8WCz8fFjw+3xY//t8WP/8fFj/+3xY+/t8WET7fFkF+3xZAAAAAAAAAAAA/HxYAPx8WIX7fFjv+3xZ//x8WPP8fFhV+31YIvx9WCX8fVgl/H1YJfx9WCX8fVgl/H1YJfx9WCX8fFgk+3xYIPt8WAv7fFgAAAAAAAAAAAAAAAAAAAAAAPt8WAD7fFgA+3xYRvt8WND7fFj/+3xY//t8WL/7fFg9/H1YI/x9WCX8fVgl/H1YJfx9WCX8fVgl+31YJfx8WCL7fFgX+3xYA/t8WAAAAAAAAAAAAAAAAAD7fFgA+3xYAPt8WCD7fFjJ+3xY/vx8WP/7fFj/+3xY//x8WPH7fFgs+3xY8Pt8Wf/7fFj/+3xY//t8WPv7fFhE+3xYBft8WAAAAAAAAAAAAPx9WQD8fVmF+3xY7/t8Wf/8fFjx/HxYOPx8WAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD7fFgA+3xYEvt8WIn7fFj9+3xY//t8WP/7fFiz+3xYG/t8WAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA+3xYAPt8WAv7fFho+3xY+vt8WP/7fFj/+3xY//t8Wf/7fFjx+3xYLPx8WfD8fFn//HxZ//x8Wf/8fFn7+3xZRPt8WQX7fFkAAAAAAAAAAAD7fFgA+3xYhfx8We/8fFn//HxY8vx8WDj8fFgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD7fFgA+3xYDft8WGj8fFnc/HxZ//x8Wf/8fFn//HxZtPt8WBz7fFgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA+3xYAPt8WAf7fFhL+3xY2fx8Wf78fFn//HxZ//x8Wf/8fFn//HxZ8ft8WCz8fVnw/H1Z//x9Wf/8fVn//H1Z+/t8WUL7fFkE+3xZAAAAAAAAAAAA/HxYAPx8WIT8fVnu/H1Z//x8WPH8fFg4/HxYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAPt8WAD7fFgI+3xYI/t8WG/7fFjW/H1Z//x9Wf/8fVn//H1Z//x9WbP7fFgb+3xYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD7fFgA+3xYA/t8WBz7fFhX+3xYzfx9Wf/8fVn//H1Z//x9Wf/8fVn//H1Z//x9WfH7fFgs+3xY8Pt8WP/7fFj/+3xY//t8WPz7fFli/H1ZLfx9WSn8fVkp/H1ZKfx9WSj8fVmY+3xY8ft8WP/7fFj0/HxYWPx9WSb8fVkp/H1ZKfx9WSn8fVkp/H1ZKfx9WSn8fVkp/H1ZKft9WCn7fFgp+3xYLPt8WDP7fFg/+3xYY/t8WK77fFjv+3xY//t8WP/7fFj/+3xY//t8WP/7fFjA+3xYQfx9WSf8fVkp/H1ZKfx9WSn8fVkp/H1ZKfx9WSn8fVkp/H1YKft8WCv7fFgv+3xYN/t8WFL7fFiV+3xY6vt8WP/7fFj/+3xY//t8WP/7fFj/+3xY//t8WP/7fFjx+3xYK/x8WPD8fFj//HxY//x8WP/8fFj++3xZy/x9Wbn8fVm4/H1ZuPx9Wbj8fVm4/H1Z3fx8WPr8fFj//HxY+/x8WMj8fVm3/H1ZuPx9Wbj8fVm4/H1ZuPx9Wbj8fVm4/H1ZuPx9Wbj8fVi4+3xYuft8WMD7fFjS+3xY7fx8WP78fFj//HxY//x8WP/8fFj//HxY//x8WP/8fFj//HxY6vx8WMD8fVm3/H1ZuPx9Wbj8fVm4/H1ZuPx9Wbj8fVm4/H1YuPx9WLn7fFi++3xYx/t8WNz7fFj7/HxY//x8WP/8fFj//HxY//x8WP/8fFj//HxY//x8WP/8fFj//HxY8ft8WCX8fFnu/HxY//x8WP/8fFj//HxY//x8Wf/8fFj//HxY//x8WP/8fFj//H1Z//x8WP/8fFj//H1Z//x8WP/8fFj//H1Z//x8WP/8fFj//H1Z//x8WP/8fFj/+3xY//t8WP/8fFn//HxZ//x8Wf/8fFj//HxY//x8WP/8fFj//HxY//x8WP/8fFj//HxY//x8WP/8fFj//HxZ//x8Wf/8fFj//HxY//x8WP/8fFj//H1Z//x8WP/8fFj//H1Z//x8WP/8fFj//H1Z//x8WP/8fFj//H1Z//x8WP/8fFj/+3xY//x8WP/8fFn//HxY//x8Wf/8fFj//HxY//x8WfD7fFgX+3xY5ft9WP77fVj/+31Z//t9Wf/7fVn/+31Z//t9Wf/7fVj/+31Z//t9WP/7fVn/+31Y//t9WP/7fVj/+31Y//t9WP/7fVj/+31Z//t9WP/7fVn/+31Z//t9Wf/7fVn/+31Z//t9Wf/7fVn/+31Z//t9WP/7fVj/+31Y//t9WP/7fVj/+31Y//t9WP/7fVn/+31Z//t9Wf/7fVn/+31Z//t9Wf/7fVn/+31Z//t9WP/7fVn/+31Y//t9WP/7fVj/+31Y//t9WP/7fVj/+31Z//t9WP/7fVn/+31Y//t9Wf/7fVj/+31Z//t9Wf/7fVn/+31Y//t9WP/7fVjr+3xYDPt8WM38fVn8/H1Z//x9Wf/8fVn//H1Z//x9Wf/8fVn//H1Z//x9Wf/8fVn//H1Z//x9Wf/8fVn//H1Z//x9Wf/8fVn//H1Z//x9Wf/8fVn//H1Z//x9Wf/8fVn//H1Z//x9Wf/8fVn//H1Z//x9Wf/8fVn//H1Z//x9Wf/8fVn//H1Z//x9Wf/8fVn//H1Z//x9Wf/8fVn//H1Z//x9Wf/8fVn//H1Z//x9Wf/8fVn//H1Z//x9Wf/8fVn//H1Z//x9Wf/8fVn//H1Z//x9Wf/8fVn//H1Z//x9Wf/8fVn//H1Z//x9Wf/8fVn//H1Z//x9Wf/8fVn9+3xY2vt8WAn7fFie+3xY+Pt8WP/7fFj/+3xY//t8WP/7fFj/+3xY//t9WP/7fFj/+3xY//t8WP/7fFj/+3xY//t8WP/7fFj/+3xY//t8WP/7fFj/+3xY//t8WP/7fFj/+3xY//t8WP/7fFj/+3xY//t8WP/7fFj/+3xY//t8WP/7fFj/+3xY//t8WP/7fFj/+3xY//t8WP/7fFj/+3xY//t8WP/7fFj/+3xY//t9WP/7fFj/+3xY//t8WP/7fFj/+3xY//t8WP/7fFj/+3xY//t8WP/7fFj/+3xY//t8WP/7fFj/+3xY//t8WP/7fFj/+3xY//t8WP/7fFj/+3xY+vt8WK37fFgF+3xYXvt9WPL7fVj/+3xY//t8WP/7fVj/+31Y//t8WP/7fVj/+31Y//t8WP/7fVj/+31Y//t8WP/7fVj/+31Y//t8WP/7fVj/+31Y//t8WP/7fVj/+31Y//t9WP/7fVj/+31Y//t9WP/7fFj/+31Y//t9WP/7fVj/+31Y//t9WP/7fVj/+31Y//t9WP/7fVj/+3xY//t9WP/7fVj/+31Y//t8WP/7fVj/+31Y//t8WP/7fVj/+31Y//t8WP/7fVj/+31Y//t8WP/7fVj/+31Y//t8WP/7fVj/+31Y//t9WP/7fVj/+31Y//t8WP/7fFj/+31Y//t9WPT7fFhs+3xYAft8WB77fFjd/H1Y/vx9WP/8fVj//H1Y//x9WP/8fVj//H1Y//x9WP/8fFj//H1Y//x8WP/8fFj//HxY//x8WP/8fFj//HxY//x9WP/8fVj//H1Y//x9WP/8fVj//H1Y//x9WP/8fVj//H1Y//x9WP/8fVj//H1Y//x9WP/8fVj//H1Y//x9WP/8fVj//H1Y//x9WP/8fVj//H1Y//x9WP/8fVj//H1Y//x9WP/8fFj//H1Y//x8WP/8fFj//HxY//x8WP/8fFj//HxY//x9WP/8fVj//H1Y//x9WP/8fVj//H1Y//x9WP/8fVj//H1Y//x9WP77fFjj+3xYKQAAAAD7fFgH+3xYkPt9Wfb7fVj//H1Y//t9WP/7fVj/+31Z//t9WP/7fVj/+31Y//x9Wf/7fVj/+31Z//t9WP/7fVj/+31Z//t9WP/8fVn/+31Y//t9WP/7fVj/+31Y//t9WP/7fVj//H1Y//t9WP/7fVn/+31Z//t9Wf/7fVn/+31Y//t9Wf/7fVn/+31Z//t9Wf/7fVj//H1Y//t9WP/7fVj/+31Z//t9WP/7fVj/+31Y//x9Wf/7fVj/+31Z//t9WP/7fVj/+31Z//t9WP/8fVn/+31Y//t9WP/7fVj/+31Y//t9WP/7fVj//H1Y//t9WP/7fVn4+3xYnvt8WAcAAAAA+3xYAvt8WCv7fFjc+31Z/ft9Wf/7fVn/+31Z//t9Wf/7fVn/+31Z//t9Wf/7fVn/+31Z//t9Wf/7fVn/+31Z//t9Wf/7fVn/+31Z//t9Wf/7fVn/+31Z//t9Wf/7fVn/+31Z//t9Wf/7fVn/+31Z//t9Wf/7fVn/+31Z//t9Wf/7fVn/+31Z//t9Wf/7fVn/+31Z//t9Wf/7fVn/+31Z//t9Wf/7fVn/+31Z//t9Wf/7fVn/+31Z//t9Wf/7fVn/+31Z//t9Wf/7fVn/+31Z//t9Wf/7fVn/+31Z//t9Wf/7fVn/+31Z//t9Wf/7fVn++3xY4vt8WDb7fFgCAAAAAPt8WAD7fFgF+3xYefx9We78fVn//H1Z//x9Wf/8fVn//H1Z//x9Wf/8fVn//H1Z//x9Wf/8fVn//H1Z//x9Wf/8fVn//H1Z//x9Wf/8fVn//H1Z//x9Wf/8fVn//H1Z//x9Wf/8fVn//H1Z//x9Wf/8fVn//H1Z//x9Wf/8fVn//H1Z//x9Wf/8fVn//H1Z//x9Wf/8fVn//H1Z//x9Wf/8fVn//H1Z//x9Wf/8fVn//H1Z//x9Wf/8fVn//H1Z//x9Wf/8fVn//H1Z//x9Wf/8fVn//H1Z//x9Wf/8fVn//H1Z//x9Wf/8fVn//H1Z8ft8WIb7fFgG+3xYAAAAAAAAAAAA+3xYAPt8WBD7fFiu+31Z9vt9Wf/7fVn/+31Z//t9Wf/7fVn/+3xZ//t9Wf/7fVn/+31Z//t9Wf/7fVn/+31Z//t9Wf/7fVn/+3xZ//t9Wf/7fVn/+31Z//t9Wf/7fVn/+31Z//t8Wf/7fVn/+3xZ//t8Wf/7fVn/+31Z//t9Wf/7fFn/+3xZ//t9Wf/7fFn/+31Z//t9Wf/7fVn/+31Z//t9Wf/7fVn/+3xZ//t9Wf/7fVn/+31Z//t9Wf/7fVn/+31Z//t9Wf/7fVn/+3xZ//t9Wf/7fVn/+31Z//t9Wf/7fVn/+31Z+Pt8WLf7fFgV+3xYAQAAAAAAAAAAAAAAAPt8WAD7fFgB+3xYI/t8WMD8fFj4/HxY//x8Wf/8fFj//HxZ//x8WP/8fFj//HxY//x8WP/8fFn//HxZ//x8WP/8fFj//HxY//x8WP/8fFn//HxY//x8Wf/8fFj//HxY//x8WP/8fFj//HxY//x8Wf/8fFj//HxY//x8WP/8fFj//HxY//x8Wf/8fFn//HxY//x8WP/8fFj//HxY//x8Wf/8fFj//HxZ//x8WP/8fFj//HxY//x8WP/8fFn//HxZ//x8WP/8fFj//HxY//x8WP/8fFn//HxY//x8Wf/8fFj//HxY+vt8WMj7fFgr+3xYAvt8WAAAAAAAAAAAAAAAAAAAAAAA+3xYAPt8WAL7fFgr+3xYvvx8WPX8fFn+/HxY//x8WP/8fFj//HxY//x8WP/8fFn//HxZ//x8Wf/8fFn//HxY//x8WP/8fFj//HxY//x8WP/8fFj//HxY//x8WP/8fFj//HxY//x8WP/8fFj//HxY//x8WP/8fFj//HxY//x8WP/8fFj//HxY//x8WP/8fFj//HxY//x8WP/8fFn//HxY//x8WP/8fFj//HxY//x8WP/8fFn//HxZ//x8Wf/8fFn//HxY//x8WP/8fFj//HxY//x8WP/8fFj//HxY9/t8WMT7fFgx+3xYAvt8WAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD7fFgA+3xYAvt8WCD7fFil+3xZ6/t8Wf37fFn/+3xZ//t8Wf/7fFn/+31Z//t8Wf/7fFn/+3xZ//t8Wf/7fFn/+3xZ//t8Wf/7fFn/+3xZ//t8Wf/7fFn/+3xZ//t8Wf/7fFn/+3xZ//t8Wf/7fFn/+3xZ//t8Wf/7fFn/+3xZ//t8Wf/7fFn/+3xZ//t8Wf/7fFn/+3xZ//t8Wf/7fFn/+3xZ//t8Wf/7fFn/+31Z//t8Wf/7fFn/+3xZ//t8Wf/7fFn/+3xZ//t8Wf/7fFn9+3xZ7ft8WK77fFgm+3xYAvt8WAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAPt8WAD7fFgB+3xYC/t8WGf7fFjT+31Y8/t9WPz7fVj/+31Y//t9WP/7fVj/+31Y//t9WP/7fVj/+3xY//t9WP/7fFj/+31Y//t8WP/7fVj/+31Y//t9WP/7fVj/+31Y//t9WP/7fVj/+31Y//t9WP/7fVj/+31Y//t9WP/7fVj/+31Y//t9WP/7fVj/+31Y//t8WP/7fVj/+31Y//t9WP/7fVj/+31Y//t9WP/7fVj/+31Y//t9WP/7fVj/+3xY//t9WP37fFj0+3xY1vt8WHD7fFgO+3xYAft8WAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA+nxYAPp8WAD7fFgE+3xYHft8WHb7fFjM/H1Z7fx9WfX8fVn5/H1Z/Px9Wf38fVn+/H1Z/vx9Wf78fVn+/H1Z/vx9Wf78fVn+/H1Z/vx9Wf78fVn+/H1Z/vx9Wf78fVn+/H1Z/vx9Wf78fVn+/H1Z/vx9Wf78fVn+/H1Z/vx9Wf78fVn+/H1Z/vx9Wf78fVn+/H1Z/vx9Wf78fVn+/H1Z/vx9Wf78fVn+/H1Z/fx9Wfz8fVn5/H1Z9vx9We77fFjR+3xYfPt8WCH7fFgF+3xYAPt8WAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA+3xYAPt8WAH7fFgF+3xYD/t8WED7fFh7+3xYqPt8WMf7fFjZ/H1Z3/x9WeD8fVnf/H1Z3/x9Wd/8fVnf/H1Z3/x9Wd/8fVnf/H1Z3/x9Wd/8fVnf/H1Z3/x9Wd/8fVnf/H1Z3/x9Wd/8fVnf/H1Z3/x9Wd/8fVnf/H1Z3/x9Wd/8fVnf/H1Z3/x9Wd/8fVnf/H1Z3/x9Wd/8fVnf/H1Z3/t8WNv7fFjK+3xYrPt8WH77fFhF+3xYEvt8WAb7fFgB+3xYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA+ntXAPp7VwD7fFgD+3xYB/t8WAr7fFgM+3xYDfx9WQ38fVkN/H1ZDfx9WQ38fVkN/H1ZDfx9WQ38fVkN/H1ZDfx9WQ38fVkN/H1ZDfx9WQ38fVkN/H1ZDfx9WQ38fVkN/H1ZDfx9WQ38fVkN/H1ZDfx9WQ38fVkN/H1ZDfx9WQ38fVkN/H1ZDfx9WQ38fVkN/H1ZDfx9WQ37fFgN+3xYDPt8WAr7fFgH+3xYBPt8WAH7fFgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/wAAAAAAAH/8AAAAAAAAH/gAAAAAAAAP8AAAAAAAAAfgAAAAAAAAA8AAAAAAAAABwAAAAAAAAAGAAAAAAAAAAIAAAAAAAAAAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAPB//+B/+AAA8H//4H/+AADwf//gf/8AAPB4AAAAH4AA8HgAAAAPgADweAAAAAeAAPB4AAAAB4AA8HgAAAAHgADweAAAAAeAAPB4AAAAB4AA8HwAAAAPAADwPgAAAD4AAPA//wAf/AAA8B//gB/8AADwB//AH/wAAPAAB+AAPgAA8AAD4AAPAADwAAHgAAeAAPAAAfAAB4AA8AAB8AAHgADwAAHwAAeAAPAAAeAAB4AA8AAD4AAPgADwAA/gAB8AAPB//8B//wAA8H//gH/+AADwf/4Af/gAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIAAAAAAAAAAgAAAAAAAAACAAAAAAAAAAMAAAAAAAAABwAAAAAAAAAHgAAAAAAAAA/AAAAAAAAAH+AAAAAAAAA/8AAAAAAAAH/8AAAAAAAB//+AAAAAAA/8=
// @license      MIT
// @match        *://*.123pan.com/*
// @match        *://*.123pan.cn/*
// @match        *://*.123684.com/*
// @match        *://*.123865.com/*
// @match        *://*.123952.com/*
// @grant        unsafeWindow
// @run-at       document-start
// @require      https://unpkg.com/jquery@3.6.0/dist/jquery.min.js
// ==/UserScript==

(function () {
	var user = {
		// 以下设置项中，常规项目（就是以//开头注释的项目）除非特殊说明，否则一般 0 为关闭，1 为开启
		vip: 1, // 开启会员修改（总开关）
		svip: 1, // 显示为超级会员，建议 1
		ad: 1, // 关闭广告，建议 1

		// 以下是自定义项目（以/*开头注释的项目），修改也非常简单
		/*
		自定义用户名与头像还有邮箱、手机号、用户 ID，留空则使用已登录账号数据
		*/
		name: "百闻不如一见",
		photo: "https://cdn.auth0.com/avatars/bw.png",
		mail: "", // 最好不改，我怕影响支付
		phone: "", // 最好不改，我怕影响支付
		id: "", // 最好不改，我怕影响支付
		/* 成长容量等级，最高可叠加 128 级 */
		level: 128,
		/*
		会员过期时间 格式为Unix时间戳，可留空为""
		1638288000 - 2021-11-31 00:00:00 (123上线时)
		2147483648 - 2038-01-19 11:14:08 (2038问题时)
		253402185600 - 9999-12-31 00:00:00 (终极时)
		*/
		endtime: 253402185600,

		// 以下的常规项目（就是以//开头注释的项目）均为独立功能，不受总开关控制
		debug: 0, // 显示本脚本的调试信息到 JavaScript 控制台中，建议 0，另外，1 显示所有，2 仅显示基本，3 仅显示修改其他 Header
	}

	var originalOpen = XMLHttpRequest.prototype.open;
	var originalSetRequestHeader = XMLHttpRequest.prototype.setRequestHeader;
	var originalFetch = fetch;

	unsafeWindow.XMLHttpRequest.prototype.open = function (method, url) {
		url = new URL(url, location.origin).href;
		this.url = url
		if (url.includes('api/user/info')) {
			// 用户信息
			if (user.vip === 1) this.addEventListener('readystatechange', function () {
				if (this.readyState === 4) {
					let res, oriRes
					try {
						res = JSON.parse(this.responseText), oriRes = JSON.parse(this.responseText)
					} catch (e) {
						res = this.response, oriRes = this.response
					}

					res.data.Vip = true // VIP
					res.data.VipLevel = user.svip ? 2 : 1 // SVIP
					if (user.ad === 1) res.data.IsShowAdvertisement = false // 广告
					if (user.endtime) {
						let time = new Date(user.endtime * 1000)
						let vipTime = new Date(1727539200 * 1000)
						let youngTime = new Date(1638288000 * 1000)
						res.data.VipExpire = time.toLocaleString() // 时间
						res.data.UserVipDetailInfos = [{
							VipDesc: user.svip === 1 ? "SVIP 会员" : "VIP 会员",
							TimeDesc: time.toLocaleDateString() + " 到期",
							IsUse: time >= new Date()
						}, {
							VipDesc: '韭菜收割包',
							TimeDesc: vipTime.toLocaleDateString() + " 生效",
							IsUse: vipTime <= new Date()
						}, {
							VipDesc: '青春创始包',
							TimeDesc: youngTime.toLocaleDateString() + " 生效",
							IsUse: youngTime <= new Date()
						}]
					}
					if (user.name) res.data.Nickname = user.name;
					if (user.photo) res.data.HeadImage = user.photo;
					if (user.mail) res.data.Mail = user.mail;
					if (user.phone) res.data.Passport = Number(user.phone);
					if (user.id) res.data.UID = Number(user.id);
					if (user.level) res.data.GrowSpaceAddCount = Number(user.level);

					if (user.debug === 1 || user.debug === 2) console.log("【123 云盘会员青春版】Hook XHR", "\n请求地址:", url, "\n原始回复:", oriRes, "\n修改回复:", res)

					Object.defineProperty(this, "responseText", {
						writable: true,
					});
					Object.defineProperty(this, "response", {
						writable: true,
					});
					this.response = JSON.stringify(res)
					this.responseText = JSON.stringify(res)
				}
			})
		} else if (url.includes('file/download_info')) {
			// 个人页面的下载
			this.addEventListener('readystatechange', async function () {
				if (this.readyState === 4 && this.status === 200) {
					let res, oriRes
					try {
						res = JSON.parse(this.responseText), oriRes = JSON.parse(this.responseText)
					} catch (e) {
						res = this.response, oriRes = this.response
					}

					if (res.data && res.data.DownloadUrl) {
						let originURL = new URL(res.data.DownloadUrl)

						if (originURL.origin.includes("web-pro")) {
							// 解密后的直链
							let directURL = new URL(decodeURIComponent(atob(originURL.searchParams.get('params'))), originURL.origin)
							directURL.searchParams.set('auto_redirect', 0)

							// 修改原始链接
							originURL.searchParams.set('params', btoa(directURL.href))

							// 最终得出链接
							res.data.DownloadUrl = originURL.href

							if (user.debug === 1 || user.debug === 2) console.log("【123 云盘会员青春版】Hook XHR", "\n请求地址:", url, "\n原始回复:", oriRes, "\n修改回复:", res)
						} else {
							originURL.searchParams.set('auto_redirect', 0)

							let newURL = new URL('https://web-pro2.123952.com/download-v2/', originURL.origin)
							newURL.searchParams.set('params', btoa(encodeURI(originURL.href)))
							newURL.searchParams.set('is_s3', 0);

							// 一定要解密，最终才能得出链接
							res.data.DownloadUrl = decodeURIComponent(newURL.href)

							if (user.debug === 1 || user.debug === 2) console.log("【123 云盘会员青春版】Hook XHR", "\n请求地址:", url, "\n原始回复:", oriRes, "\n修改回复:", res)
						}
					}
					Object.defineProperty(this, "responseText", {
						writable: true,
					});
					Object.defineProperty(this, "response", {
						writable: true,
					});
					this.response = JSON.stringify(res)
					this.responseText = JSON.stringify(res)
				}
			});
		} else if (url.includes('share/download/info')) {
			// 分享页面的下载
			this.addEventListener('readystatechange', async function () {
				if (this.readyState === 4 && this.status === 200) {
					let res, oriRes
					try {
						res = JSON.parse(this.responseText), oriRes = JSON.parse(this.responseText)
					} catch (e) {
						res = this.response, oriRes = this.response
					}

					if (res.data && res.data.DownloadURL) {
						let originURL = new URL(res.data.DownloadURL)

						if (!originURL.origin.includes("web-pro")) {
							originURL.searchParams.set('auto_redirect', 0)

							let newURL = new URL('https://web-pro2.123952.com/download-v2/', originURL.origin)
							newURL.searchParams.set('params', btoa(encodeURI(originURL.href)))
							newURL.searchParams.set('is_s3', 0);

							// 一定要解密，最终才能得出链接
							res.data.DownloadURL = decodeURIComponent(newURL.href)

							if (user.debug === 1 || user.debug === 2) console.log("【123 云盘会员青春版】Hook XHR", "\n请求地址:", url, "\n原始回复:", oriRes, "\n修改回复:", res)
						}
					}

					Object.defineProperty(this, "responseText", {
						writable: true,
					});
					Object.defineProperty(this, "response", {
						writable: true,
					});
					this.response = JSON.stringify(res)
					this.responseText = JSON.stringify(res)
				}
			});
		} else if (url.includes('file/batch_download_info')) {
			// 个人页面的打包下载
			this.addEventListener('readystatechange', function () {
				if (this.readyState === 4 && this.status === 200) {
					let res, oriRes
					try {
						res = JSON.parse(this.responseText), oriRes = JSON.parse(this.responseText)
					} catch (e) {
						res = this.response, oriRes = this.response
					}

					if (res.data && res.data.DownloadUrl) {
						let originURL = new URL(res.data.DownloadUrl)

						if (originURL.origin.includes("web-pro")) {
							// 解密后的直链
							let directURL = new URL(decodeURIComponent(atob(originURL.searchParams.get('params'))), originURL.origin)
							directURL.searchParams.set('auto_redirect', 0)

							// 修改原始链接
							originURL.searchParams.set('params', btoa(directURL.href))

							// 最终得出链接
							res.data.DownloadUrl = originURL.href

							if (user.debug === 1 || user.debug === 2) console.log("【123 云盘会员青春版】Hook XHR", "\n请求地址:", url, "\n原始回复:", oriRes, "\n修改回复:", res)
						} else {
							originURL.searchParams.set('auto_redirect', 0)

							let newURL = new URL('https://web-pro2.123952.com/download-v2/', originURL.origin)
							newURL.searchParams.set('params', btoa(encodeURI(originURL.href)))
							newURL.searchParams.set('is_s3', 0);

							// 一定要解密，最终才能得出链接
							res.data.DownloadUrl = decodeURIComponent(newURL.href)

							if (user.debug === 1 || user.debug === 2) console.log("【123 云盘会员青春版】Hook XHR", "\n请求地址:", url, "\n原始回复:", oriRes, "\n修改回复:", res)
						}
					}
					Object.defineProperty(this, "responseText", {
						writable: true,
					});
					Object.defineProperty(this, "response", {
						writable: true,
					});
					this.response = JSON.stringify(res)
					this.responseText = JSON.stringify(res)
				}
			});
		} else if (url.includes('web_logs') || url.includes('metrics')) {
			throw new Error('【123 云盘会员青春版】已屏蔽此数据收集器');
		}
		return originalOpen.apply(this, arguments);
	};

	unsafeWindow.fetch = async function (url, options) {
		if (url.includes('web_logs') || url.includes('metrics')) {
			throw new Error('【123 云盘会员青春版】已屏蔽此数据收集器');
		}
		return originalFetch(url, options);
	};

	const originalCreateElement = document.createElement;
	if (user.ad) unsafeWindow.document.createElement = function (tagName) {
		const element = originalCreateElement.call(this, tagName);
		if (tagName.toLowerCase() === "div") {
			const observer = new MutationObserver(mutations => {
				for (const mutation of mutations) {
					$(mutation.addedNodes).each(function () {
						const element = $(this);
						if (this.tagName === "SPAN" && element.text().includes("点击查看详情")) {
							const newElement = element.clone();
							newElement.text("感谢您使用本脚本，好用的话就点击这儿来给个 Star 吧~");
							newElement.off("click").on("click", function () {
								window.open("https://github.com/hmjz100/123panYouthMember", "_blank");
							});
							element.replaceWith(newElement);
						}
					});
				}
			});
			observer.observe(element, { childList: true, subtree: true });
		}
		return element;
	};

	let reddem = unsafeWindow.reddem = () => {
		const and = { os: "Android", vers: ["6.0", "7.1.2", "8.1.0", "9.0", "10.0"] };
		const ios = { os: "iOS", vers: ["12.0", "13.4", "14.0", "15.0"] };

		const devs = {
			"Apple": ios,
			"Xiaomi": and,
			"Samsung": and,
			"Huawei": {
				...and,
				hmos: () => (Math.random() < 0.5 ? "HarmonyOS;" : ""),
				hmsCore: () => `HMSCore ${Math.floor(Math.random() * 7) + 1}.${Math.floor(Math.random() * 10)}.${Math.floor(Math.random() * 10)}.${Math.floor(Math.random() * 1000)};`
			},
			"Google": and,
			"Oneplus": and,
			"Vivo": and,
			"Oppo": and
		};

		const appXVers = [
			"2.1.3", "2.1.4",
			"2.3.1", "2.3.2", "2.3.4", "2.3.5",
			"2.3.6", "2.3.7", "2.3.8", "2.3.9",
			"2.3.12", "2.3.13", "2.3.14",
			"2.4.0", "2.4.1", "2.4.7"];
		const appVers = [
			"38", "39",
			"42", "43", "44", "45",
			"46", "47", "48", "49",
			"50", "54", "55",
			"56", "61", "62", "69"];
		const appXVer = appXVers[Math.floor(Math.random() * appXVers.length)];
		const appVer = appVers[appXVers.indexOf(appXVer)];

		const brands = Object.keys(devs);
		const brand = brands[Math.floor(Math.random() * brands.length)];
		const { os, vers } = devs[brand];

		const osVer = vers[Math.floor(Math.random() * vers.length)];

		return {
			ua: `123pan/v${appXVer} (${os}_${osVer};${brand})`,
			version: Number(appVer),
			versionX: appXVer,
			osVersion: osVer,
			os: os,
			brand: brand
		}
	}

	// 重写 setRequestHeader 方法
	unsafeWindow.XMLHttpRequest.prototype.setRequestHeader = function (header, value) {
		let url = this.url, resName = header, resValue = value, oriResName = header, oriResValue = value
		let info = reddem()

		let headers = {
			"user-agent": info.ua,
			"platform": info.os.toLowerCase(),
			"app-version": info.version,
			"x-app-version": info.versionX
		};

		if (!!url && url.includes('download')) {
			// 修改请求头
			if (resName.toLowerCase() in headers) {
				resValue = headers[resName.toLowerCase()];

				if (user.debug === 1 || user.debug === 2) console.log("【123 云盘会员青春版】Hook XHR", "\n请求地址:", url, "\n请求头项:", { [oriResName]: oriResValue }, "\n修改头项:", { [resName]: resValue }, "\n随机项目:", info)

				header = resName;
				value = resValue;
			}
		}

		return originalSetRequestHeader.apply(this, arguments);
	};

	// hook 解密 base64 的部分
	unsafeWindow.atob = function (arguments) {
		return atob(decodeURIComponent(arguments))
	}
})();
