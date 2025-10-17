---
permalink: /
title: ""
excerpt: ""
author_profile: true
redirect_from: 
  - /about/
  - /about.html
---
<!-- main: /Users/jhh/Project/Github/JackAILab.github.io/_config.yml -->

{% if site.google_scholar_stats_use_cdn %}
{% assign gsDataBaseUrl = "https://cdn.jsdelivr.net/gh/" | append: site.repository | append: "@" %}
{% else %}
{% assign gsDataBaseUrl = "https://raw.githubusercontent.com/" | append: site.repository | append: "/" %}
{% endif %}
{% assign url = gsDataBaseUrl | append: "google-scholar-stats/gs_data_shieldsio.json" %}

<span class='anchor' id='about-me'></span>

# 🧍‍♂️ Biography
Hi, 😊 here is HUANG Jiehui, a PhD student at HKUST and supervised by **[Jiaya Jia](https://jiaya.me/home).** I am passionate 🚀 about academic research and aim to use my research findings to address real-world challenges, thereby making meaningful and impactful contributions to society.

I have been relentlessly striving to see humanity achieve digital immortality and machine consciousness at the earliest opportunity.
My primary research interest is in controllable **AIGC & VLM.** If you are interested in collaboration or wish to contact me, **please feel free to reach out via** [email](huangjh336@mail2.sysu.edu.cn).

Previously, I received a M.S. degree, advised by Xiaodan Liang [(梁小丹)](https://scholar.google.com/citations?view_op=search_authors&mauthors=xiaodan+liang&hl=zh-CN&oi=ao), co-supervised by [Shencai Liao](https://shengcailiao.github.io/) (Professor at United Arab Emirates University, IEEE Fellow, IAPR Fellow).
I am working in HCPLab, Artificial Intelligence at the School of Intelligent Systems Engineering, **[Sun Yat-sen University](https://ise.sysu.edu.cn/)**, Shenzhen, China. I am also lucky to have opportunities to collaborate with [Peter. X. Liu](https://scholar.google.com/citations?user=PUT-52IAAAAJ&hl=zh-CN) (Professor at Carleton University, IEEE Fellow), [Calvin Yu-Chian Chen](https://www.ece.pku.edu.cn/info/1053/2659.htm) (Professor at Peking University).


# 🔥 News
- *2025.07*: &nbsp;🎉🎉 One paper was accepted by ACM MM 2025.
- *2025.01*: &nbsp;🎉🎉 One paper was accepted by IEEE Transactions on Instrumentation & Measurement.
- *2024.11*: &nbsp;🎉🎉 Obtain the National Scholarship from the Sun Yat-sen University.
- *2024.04*: &nbsp;🎉🎉 Release (✨ 800+ Star), [ConsistentID](https://ssugarwh.github.io/consistentid.github.io/), one high-fidelity and fast customized portrait generation model.
- *2024.01*: &nbsp;🎉🎉 One paper was accepted by Computers in Biology and Medicine.
- *2023.12*: &nbsp;🎉🎉 Two papers were accepted by AAAI and Knowledge-Based Systems respectively.
- *2023.11*: &nbsp;🎉🎉 One paper was accepted by Neurocomputing.
- *2022.10*: &nbsp;🎉🎉 Obtain the Master's Scholarship for first class from the Sun Yat-sen University.
- *2021.11*: &nbsp;🎉🎉 Obtain the National Scholarship from the Nanchang University.

# 💻 Internships
- *2024.12 - 2025.03*, [Pixocial Technology Team](https://hunyuan.tencent.com/), cooperate with [Haoxiang Li](https://resume.haoxiang.org/).
- *2024.04 - 2024.09*, [Tencent, Hunyuan Team](https://hunyuan.tencent.com/), Tencent TEG, Shenzhen.
- *2023.11 - 2024.03*, [Lenovo, Research Institute](https://research.lenovo.com/webapp/view/researchField.html), Shenzhen.
- *2023.07 - 2023.10*, [SenseTime, Research Institute](https://www.sensetime.com/cn), Shenzhen.


# 📝 Publications 
<div class='paper-box'><div class='paper-box-image'><div><div class="badge">arXiv</div><img src='images/publications/20256ACM_LaVieID' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

[LaVieID: Local Autoregressive Diffusion Transformers for Identity-Preserving Video Creation](https://arxiv.org/abs/2508.07603) \\
Wenhui Song, Hanhui Li, **Jiehui Huang**, Panwen Hu, Yuhao Cheng, Long Chen, Yiqiang Yan, Xiaodan Liang*

[**Project**](https://github.com/ssugarwh/LaVieID) <strong><span class='show_paper_citations' data='4FA6C0AAAAAJ:qjMakFHDy7sC'></span></strong>

- We propose LaVieID, a novel framework that effectively addresses the identity-preserving text-to-video generation task. 
- We introduce a local router to provide spatial structural guidance by leveraging fine-grained facial cues. 
- We devise a temporal autoregressive module to model longrange temporal dependencies among frames. 

</div>
</div>

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">arXiv</div><img src='images/publications/2024_Arxiv_ConsistentID.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

[ConsistentID:Portrait Generation with Multimodal Fine-Grained Identity Preserving](https://arxiv.org/abs/2404.16771) \\
**Jiehui Huang**, Xiao Dong, Wenhui Song, Hanhui Li, Jun Zhou, Yuhao Cheng, Shutao Liao, Long Chen, Yiqiang Yan, Shengcai Liao, Xiaodan Liang*

[**Project**](https://github.com/JackAILab/ConsistentID), [**HuggingFace Demo**](https://huggingface.co/spaces/JackAILab/ConsistentID)  <strong><span class='show_paper_citations' data='4FA6C0AAAAAJ:qjMakFHDy7sC'></span></strong>

- We introduce ConsistentID to improve fine-grained customized facial generation by incorporating detailed descriptions of facial regions and local facial features. 
- We devise an ID-preservation network optimized by facial attention localization strategy, enabling more accurate ID preservation and more vivid facial generation. 
- We introduce the inaugural fine-grained facial generation dataset, FGID, addressing limitations in existing datasets for capturing diverse identity-preserving facial details. 

</div>
</div>

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">Knowledge-Based System</div><img src='images/publications/2024KBS_TMBL.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

[TMBL: Transformer-based multimodal binding learning model for multimodal sentiment analysis](https://doi.org/10.1016/j.knosys.2023.111346) \\
**Jiehui Huang**, Jun Zhou, Zhenchao Tang, Jiaying Lin, and Calvin Yu-Chian Chen*

[**Project**](https://github.com/JackAILab/TMBL) <strong><span class='show_paper_citations' data='4FA6C0AAAAAJ:qjMakFHDy7sC'></span></strong>

- Considering that existing multi-modal fusion systems rarely consider fine-grained word-level interactions, we redesigned the Transformer structure, effectively improving the ACC index by 6%. 
- In order to solve the problem of modal heterogeneity caused by multi-modal feature fusion, inspired by CLIP, a cross-model binding mechanism was designed for each modality to more effectively fuse modal features. 
- Aiming at the modal aliasing problem caused by the difficulty in distinguishing modal features, CLS and PositionEmbedding information are designed to effectively distinguish modal space and semantic relationships.

</div>
</div>

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">Neurocomputing</div><img src='images/publications/2024Neurocomputing_DTP.jpg' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

[Progressive network based on detail scaling and texture extraction: A more general framework for image deraining](https://www.sciencedirect.com/science/article/abs/pii/S092523122301189X) \\
**Jiehui Huang**, Zhenchao Tang, Xuedong He, Jun Zhou, Defeng Zhou, and Calvin Yu-Chian Chen*

[**Project**](https://github.com/JackAILab/DTPNet/tree/main) <strong><span class='show_paper_citations' data='4FA6C0AAAAAJ:qjMakFHDy7sC'></span></strong>

- In order to enhance the coupling and portability of the module, the existing rain removal module was redesigned and a multi-scale coupling method was established. A simple and effective strategy achieved a model increase of 5%.
- In order to improve the transferability and generalization of the model, a detail scaling module is designed to extract generalized features from degraded images and restore finer details to avoid distortion.
- The attention layer and feed-forward layer in the Transformer block are enhanced to extract universal features more efficiently, enhancing the model's ability to capture comprehensive and transferable features.
- The progressive learning strategy assists in learning more multi-scale features and achieves SOTA performance on data sets such as SPA-Data, RainDrop, RID, and Rain100.
</div>
</div>

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">AAAI2024</div><img src='images/publications/2024AAAI_CoVL.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

[Comprehensive View Embedding Learning for Single-cell Multimodal Integration](https://ojs.aaai.org/index.php/AAAI/article/view/29453)

Zhenchao Tang, **Jiehui Huang**, Guanxing Chen, Pengfei Wen, and Calvin Yu-Chian Chen*

[**Project**](https://github.com/JackAILab/scintegration) <strong><span class='show_paper_citations' data='4FA6C0AAAAAJ:qjMakFHDy7sC'></span></strong>

- Embedding learning is performed on single-cell multi-modal data from three views, such as the regulatory relationship between different modalities and the relationship between single-cell fine-grained features in each modality.
- By learning graph link embeddings, the proposed CoVEL can model cross-modal regulatory relationships and use biological knowledge to bridge the gap between feature spaces under different modalities.
- To ensure that differences between modalities are eliminated and biological heterogeneity is preserved, single-cell fine-grained embeddings and contrastive cell embeddings are unsupervisedly learned on multimodal data.
- The proposed self-supervised learning method effectively finds the information between data from the perspective of representation learning, while the generation method focuses on learning the information within the data.

</div>
</div>

- ``Computers In Biology And Medicine 2024`` [Parkinson’s Severity Diagnosis Explainable Model Based on 3D Multi-Head Attention Residual Network](https://www.sciencedirect.com/science/article/abs/pii/S001048252400043X), **Jiehui Huang**, Linsan Lin, Fengcheng Yu, Xuedong He, et. al \| [**Project**](https://github.com/JackAILab/MARNet)
- `Soft Computing 2021` [Spiral-based chaotic chicken swarm optimization algorithm for parameters identification of photovoltaic models](https://link.springer.com/article/10.1007/s00500-021-06010-x), Miao Li, Chunquan Li, Zhenyu Huang, **Jiehui Huang**, Gaige Wang, Peter. X. Liu*
- ``Applied Intelligence 2022`` [A novel decomposition-based ensemble model for short-term load forecasting using hybrid artificial neural networks](https://link.springer.com/article/10.1007/s10489-021-02864-8), Zhiyuan Liao, **Jiehui Huang**, Yuxin Cheng, Chunquan Li, Peter. X. Liu*
- ``IET Generation, Transmission & Distribution 2021`` [A decomposition‐based multi‐time dimension long short‐term memory model for short‐term electric load forecasting](https://ietresearch.onlinelibrary.wiley.com/doi/full/10.1049/gtd2.12265), Jinglin Liu, **Jiehui Huang**, Zhiwang Zhou, Chunquan Li, Zhiyuan Liao, and Peter. X. Liu*

# 🎖 Honors and Awards
- *2024.11*  National Scholarship of Sun Yat-sen University
- *2022.10*  The First Prize Scholarship of Sun Yat-sen University
- *2022.06*  Outstanding Graduate of Nanchang University
- *2021.10*  National Scholarship of Nanchang University(0.7%)
- *2021.8*  (CIMC) Siemens Cup China Intelligent Manufacturing Challenge: National Preliminary Championship First Prize
- *2020.8*  (RMUC) Robomaster Infantry Group: National Championship First Prize
- *2020.2*  A patent type for a non-blocking controllable projectile launch system: Invention Patent

# 📖 Educations
<!-- - *2022.06 - (now)*, M.S in Artificial Intelligence, School of Intelligent Systems Engineering, Sun Yat-sen University, Guangdong. 
- *2018.09 - 2022.06*, B.E in Automation, School of Intelligent Systems Engineering, Nanchang University, Jiangxi, Automation.
- *2015.09 - 2018.06*, Jiangxi Linchuan No.1 Middle School, China. -->

<div class='school-box'>
<!-- <div><img src='images/Schools/SYSU.jpeg' alt="sym" width="80"></div> -->
<div class='school-box-text' markdown="1">
2025.09 - now, PhD. Student.

Artificial Intelligence, Department of Computer Science and Engineering (CSE).

Hong Kong University of Science and Technology, Hong Kong.
</div>
</div>

<div class='school-box'>
<!-- <div><img src='images/Schools/SYSU.jpeg' alt="sym" width="80"></div> -->
<div class='school-box-text' markdown="1">
2022.09 - 2025.0, M.S Student.

Artificial Intelligence, School of Intelligent Systems Engineering(ISE).

Sun Yat-sen University, Shenzhen.
</div>
</div>

<div class='school-box'>
<!-- <div><img src='images/Schools/NCU.jpg' alt="sym" width="80"></div> -->
<div class='school-box-text' markdown="1">
2018.09 - 2022.06, Undergraduate.

Automation, School of Intelligent Systems Engineering.

Nanchang University (NCU), Nanchang.
</div>
</div>


<!-- 
# 🗺️ Visitor Map
<!-- map now
<script type="text/javascript" id="mmvst_globe" src="//mapmyvisitors.com/globe.js?d=r69yAPisnEjdANVaLxarFfRXmKprd5zYBOsyRx-aJnY"></script>
 -->
<!-- global now
<script type="text/javascript" id="mmvst_globe" src="//mapmyvisitors.com/globe.js?d=r69yAPisnEjdANVaLxarFfRXmKprd5zYBOsyRx-aJnY"></script>
 -->
<!-- previous version-1212
script type="text/javascript" src="//rf.revolvermaps.com/0/0/6.js?i=54e0ojatafc&amp;m=7&amp;c=e63100&amp;cr1=ffffff&amp;f=arial&amp;l=0&amp;bv=90&amp;lx=-420&amp;ly=420&amp;hi=20&amp;he=7&amp;hc=a8ddff&amp;rs=80" async="async"></script>
 -->
